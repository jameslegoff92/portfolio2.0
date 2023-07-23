//This is a starter template for most nodejs servers for development
// Core node modules
const path = require("path");

//Third-party modules
const express = require("express");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const bodyParser = require("body-parser");

//Local modules
const { sendEmail } = require("./sendemail");

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
const staticFolderPath = path.join(__dirname, "../client/public");
const viewsFolderPath = path.join(__dirname, "/views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(staticFolderPath));
app.set("view engine", "ejs");
app.set("views", viewsFolderPath);

app.get("/", (req, res) => {
  res.render("pages/homepage");
});

app.post("/send-email", (req, res) => {
  const message = `Hi there, my name is ${req.body.name} and I am from ${req.body.company} and I'd like to discuss project ${req.body.project}. 
  If you are interested you can reach me at ${req.body.email}`;
  sendEmail(message).catch(console.error);
  res.send({ message: "Email received!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
