const { getDb } = require("../db");

class Project {
  constructor({ name, description, img, tags, url, repo }) {
    this.name = name;
    this.description = description;
    this.img = img;
    this.tags = tags;
    this.url = url;
    this.repo = repo;
  }  

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

module.exports = Project;
