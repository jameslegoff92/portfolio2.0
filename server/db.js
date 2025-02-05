const { MongoClient, ServerApiVersion } = require("mongodb");

// Connection URL and Database Name
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@portfoliocluster.ilizpko.mongodb.net/?retryWrites=true&w=majority&appName=portfoliocluster`;
const dbName = process.env.DB_NAME_TESTING;

let client;
let db;


const connectToDatabase = async () => {
  // If `db` is already set, it means we have an existing connection
  if (db) {
    return db;
  }

  if (!client) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
  }

  try {
    // Connect if not already connected
    if (!client.topology || !client.topology.isConnected()) {
      await client.connect();
      console.log("Connected successfully to server");
    }
    // Select the database through the connection returned by the MongoClient.connect
    db = client.db(dbName);
    return db;

  } catch (err) {
    console.error("Unable to connect to the database:", err);
    // Close the connection in case of a connection error
    await client.close();
  }
};

const getDb = () => {
  if (!db) {
    throw new Error('Database not connected. Call connectToDatabase() first.');
  }
  return db;
};

/**
 * Resets the MongoDB connection pool.
 * This function closes the existing client (and its pool) and creates a new one.
 */
const resetConnectionPool = async () => {
  try {
    if (client && client.topology && client.topology.isConnected()) {
      await client.close();
      console.log("Existing connection pool closed.");
    }
    // Create a new client instance, which creates a new pool
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
    db = client.db(dbName);
    console.log("New connection pool created.");
    return db;
  } catch (error) {
    console.error("Error resetting the connection pool:", error);
    throw error;
  }
};

/**
 * Gracefully close the MongoDB connection.
 */
const closeDbConnection = async () => {
  if (client && client.topology && client.topology.isConnected()) {
    try {
      await client.close();
      console.log("Database connection closed gracefully.");
      // Optionally, reset the client and db variables
      client = null;
      db = null;
    } catch (error) {
      console.error("Error while closing the database connection:", error);
    }
  }
};

// Attach listeners for process termination signals to close the connection gracefully
process.on("SIGINT", async () => {
  console.log("SIGINT signal received.");
  await closeDbConnection();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("SIGTERM signal received.");
  await closeDbConnection();
  process.exit(0);
});

module.exports = { connectToDatabase, getDb, resetConnectionPool, closeDbConnection };