const db = require("../database/db");

function getUsers(req, res) {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(rows);
  });
}

function createUser(req, res) {
  const { nome, email } = req.body;

  db.run(
    "INSERT INTO users (nome, email) VALUES (?, ?)",
    [nome, email],
    function (err) {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        id: this.lastID,
        nome,
        email,
      });
    }
  );
}

module.exports = {
  getUsers,
  createUser,
};