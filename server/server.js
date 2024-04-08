//This is a starter template for most nodejs servers for development
// Core node modules
const path = require("path");
require("dotenv").config();
const { connectToDatabase } = require('./db');

//Third-party modules
const express = require("express");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const bodyParser = require("body-parser");

//Open livereload high port and start to watch public directory for changes
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

// Ping browser on Express boot, once browser has reconnected and handshaken
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express();




//Monkey patch every served HTML so they know of changes
app.use(connectLivereload());

const port = process.env.PORT || 3000;
const staticFolderPath = path.join(__dirname, "../client/dist");
const viewsFolderPath = path.join(__dirname, "/views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(staticFolderPath));
app.set("view engine", "ejs");
app.set("views", viewsFolderPath);

// Middleware to connect to the database
app.use(async (req, res, next) => {
  await connectToDatabase(); 
  next();
});

// Routes
const projectRouter = require('./routes/project');


app.get("/", async (req, res) => {
  res.render("pages/homepage");
});

app.use(projectRouter);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
