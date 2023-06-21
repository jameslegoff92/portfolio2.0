//This is a starter template for most nodejs servers for development
// Core node modules
const path = require("path");

//Third-party modules
const express = require("express");
// const livereload = require("livereload");
// const connectLivereload = require("connect-livereload");

// Open livereload high port and start to watch public directory for changes
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, "public"));

// Ping browser on Express boot, once browser has reconnected and handshaken
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express();


//Monkey patch every served HTML so they know of changes
// app.use(connectLivereload());

const port = process.env.PORT || 3000;
const staticFolderPath = path.join(__dirname, "../client/public");
const viewsFolderPath = path.join(__dirname, "/views");

app.use(express.static(staticFolderPath));
app.set("view engine", "ejs");
app.set("views", viewsFolderPath);

app.get("/", (req, res) => { 
  res.render("pages/homepage");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});