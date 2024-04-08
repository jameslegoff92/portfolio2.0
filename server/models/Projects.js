const { getDb } = require("../db");

class Projects {
  static async getAll() {
    try {
      const db = getDb();
      const collection = db.collection("projects");
      const documents = await collection.find({}).toArray();
      return documents;
    } catch (err) {
      console.error("Unable to connect to the database:", err);
    }
  }
}

module.exports = Projects;
