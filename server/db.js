const { MongoClient, ServerApiVersion } = require('mongodb');

// Connection URL and Database Name
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@portfoliocluster.ilizpko.mongodb.net/?retryWrites=true&w=majority&appName=portfoliocluster`;
const dbName = process.env.DB_NAME_TESTING;

let db;

const connectToDatabase = async () => {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    } 
  });
  
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected successfully to server');
    
    // Select the database through the connection returned by the MongoClient.connect
    db = client.db(dbName);
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    // Close the connection in case of a connection error
    await client.close();
  }
};

const getDb = () => {
  return db;
};

module.exports = { connectToDatabase, getDb };