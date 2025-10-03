const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

// Fichiers statiques (CSS, images...)
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Pages principales
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public/login.html"));
});

// Dashboard après connexion
app.post("/dashboard", (req, res) => {
  const { email, role } = req.body;
  res.send(`
    <h1>Bienvenue ${email}</h1>
    <p>Votre rôle est : <b>${role}</b></p>
    <a href="/">Retour</a>
  `);
});

// Routes pour anciens fichiers / dossiers
app.get("/Documentation", (req, res) => {
  res.sendFile(path.join(__dirname, "Documentation/index.html"));
});
app.get("/Monetisation", (req, res) => {
  res.sendFile(path.join(__dirname, "Monetisation/index.html"));
});
app.get("/Pages", (req, res) => {
  res.sendFile(path.join(__dirname, "Pages/index.html"));
});
app.get("/Suivi", (req, res) => {
  res.sendFile(path.join(__dirname, "Suivi/index.html"));
});
app.get("/ressource", (req, res) => {
  res.sendFile(path.join(__dirname, "ressource/index.html"));
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur Ramses lancé sur http://localhost:${PORT}`);
});