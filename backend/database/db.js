const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/database.db", (err) => {
  if (err) {
    console.log("Erro ao conectar ao banco", err);
  } else {
    console.log("Banco conectado com sucesso");
  }
});

module.exports = db;