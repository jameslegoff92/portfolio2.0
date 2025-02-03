//This is a starter template for most nodejs servers for development
// Core node modules
const path = require("path");
const dotenv = require("dotenv");
const envFile = `.env.${process.env.NODE_ENV || "development"}`;
dotenv.config({ path: envFile });

// Log the file that is being used
console.log(`Using ${envFile} for environment variables`);

//Connects to the NoSQL Database
const { connectToDatabase } = require("./db");

//Third-party modules
const express = require("express");

if (process.env.NODE_ENV == "development") {
  var livereload = require("livereload");
  var connectLivereload = require("connect-livereload");
}
const bodyParser = require("body-parser");
const i18next = require("i18next");     
const Backend = require("i18next-fs-backend");
const middleware = require("i18next-http-middleware");

if (process.env.NODE_ENV == "development") {
  //Open livereload high port and start to watch public directory for changes
  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(path.join(__dirname, "public"));

  // Ping browser on Express boot, once browser has reconnected and handshaken
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });
}

const app = express();

i18next
  .use(Backend) // to load translation files
  .use(middleware.LanguageDetector) // to detect user language
  .init({
    fallbackLng: "fr",
    backend: {
      loadPath: __dirname + "/locales/{{lng}}.json",
    },
    detection: {
      order: ["querystring", "cookie"], // methods of language detection
      caches: ["cookie"], // where to cache the user's language
    },
  });

app.use(middleware.handle(i18next));

//Monkey patch every served HTML so they know of changes
if (process.env.NODE_ENV == "development") {
  app.use(connectLivereload());
}

const port = process.env.PORT || 3000;

const staticFolderPath = path.join(__dirname, "../client/dist");
const viewsFolderPath = path.join(__dirname, "/views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(staticFolderPath));
app.set("view engine", "ejs");
app.set("views", viewsFolderPath);

// Middleware to connect to the database
async function startServer() {
  await connectToDatabase();
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

// Routes
const projectRouter = require("./routes/project");
const aboutRouter = require("./routes/about");
const blogRouter = require("./routes/blog");
const contactRouter = require("./routes/contact");

app.get("/", async (req, res) => {
  const url = 'home';
  console.log("url value: ", url);
  res.render("pages/homepage", { script: "homepage.bundle.js", t: req.t, url });
});

app.use(projectRouter);
app.use(aboutRouter);
app.use(blogRouter);
app.use(contactRouter);

if (process.env.NODE_ENV == "development") {
  app.get("/testing", (req, res) => {
    res.render("pages/testing", { script: "testing.bundle.js", t: req.t });
  });
}

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

startServer().catch(err => console.error("Failed to start the server", err));