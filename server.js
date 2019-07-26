var express = require("express");
bodyParser = require("body-parser");
app = express();
massive = require("massive");
config = require("./config.js");
port = config.port;
cors = require("cors");
passport = require("passport");
Auth0Strategy = require("passport-auth0");
session = require("express-session");
(stripe = require("stripe")(config.secret_key)), (path = require("path"));

// host: 0.0.0.0
// port: 3000

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

function sendUser(req, res) {
  (req.user && res.status(200).send(req.user)) ||
    (!req.user && res.status(401).send({ user: null }));
}

function logout(req, res) {
  console.log("logged out!");
  req.logout();
  res.redirect(302, "http://localhost:3000/login");
}

//-----------AUTH0---------------//

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: config.auth.domain,
      clientID: config.auth.id,
      clientSecret: config.auth.secret,
      callbackURL: config.auth.callback
    },
    (accessToken, refreshToken, extraParams, profile, done) =>
      done(null, profile)
  )
);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

//ENDPOINTS
app.get("/api/auth", passport.authenticate("auth0"));
app.get(
  "/api/auth/callback",
  passport.authenticate("auth0", {
    successRedirect: `http://localhost:3000/admin`,
    failureRedirect: "http://localhost:3000/login"
  })
);
app.get("/api/auth/me", sendUser);
app.get("/api/auth/logout", logout);

//--------------STRIPE-------------//
app.post("/api/payment", function(req, res, next) {
  //convert amount to pennies
  const amountArray = req.body.amount.toString().split("");
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if (amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
      break;
    } else {
      pennies.push(amountArray[i]);
    }
  }
  const convertedAmt = parseInt(pennies.join(""));

  const charge = stripe.charges.create(
    {
      amount: convertedAmt, // amount in cents, again
      currency: "usd",
      source: req.body.token.id,
      description: "Test charge from react app"
    },
    function(err, charge) {
      if (err) return res.sendStatus(500);
      return res.sendStatus(200);
    }
  );
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.listen(port, function() {
  console.log(`Started server on port ${port}`);
});
