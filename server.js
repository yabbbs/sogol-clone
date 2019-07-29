var express = require("express");
bodyParser = require("body-parser");
app = express();
massive = require("massive");
config = require('config');
port = config.port;
cors = require("cors");
session = require("express-session");

var app = (module.exports = express());
app.use(express.static(__dirname + "/build"));
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: config.server.secret,
    resave: false,
    saveUninitialized: false
  })
);
console.log("app", app);

massive(config.massive).then(function(db) {
  app.set("db", db);
});

app.get("/products", (req, res) => {
  let db = app.get("db");
  db.getAllProducts().then(pics => {
    res.status(200).send(pics);
  });
});

app.get("/pic/:id", (req, res) => {
  let db = app.get("db");
  db.getPicById([req.params.id]).then(pics => {
    res.status(200).send(pics);
  });
});

app.get("/products/:id", (req, res) => {
  let db = app.get("db");
  db.joinTables([req.params.id]).then(details => {
    res.status(200).send(details);
  });
});

app.get("/cart", (req, res) => {
  let db = app.get("db");
  db.joinTables().then(details => {
    res.status(200).send(details);
  });
});

app.post("/add/stuff", (req, res) => {
  let db = app.get("db");
  db.createProduct([
    req.body.title,
    req.body.img,
    req.body.short_description
  ]).then(bleh => {
    res.status(200);
  });
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.listen(port, function() {
  console.log(`Started server on port ${port}`);
});
