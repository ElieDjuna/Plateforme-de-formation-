const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Configurer EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: "secretKey123",
  resave: false,
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public/connexion.html"));
});

app.post("/dashboard", (req, res) => {
  const { email, role } = req.body;
  req.session.user = { email, role };
  res.redirect("/dashboard");
});

app.get("/dashboard", (req, res) => {
  if (!req.session.user) return res.redirect("/login");
  res.render("dashboard", { user: req.session.user });
});

app.get("/deconnexion", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Serveur Ramses lancé sur http://localhost:${PORT}`);
});