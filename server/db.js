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

module.exports = { connectToDatabase, getDb };
