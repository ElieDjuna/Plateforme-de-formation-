const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public/login.html"));
});

app.post("/dashboard", (req, res) => {
  const { email, role } = req.body;
  res.send(`
    <h1>Bienvenue ${email}</h1>
    <p>Votre rôle est : <b>${role}</b></p>
    <a href="/">Retour</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Serveur Ramses lancé sur http://localhost:${PORT}`);
});