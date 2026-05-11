require("dotenv").config();

const express = require("express");
const cors = require("cors");

require("./database/init");

// Importa as rotas
const usersRoutes = require("./routes/users.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Usa as rotas
app.use("/users", usersRoutes);

app.listen(process.env.PORT, () => {
  console.log("Servidor rodando");
});