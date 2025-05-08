const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("API backend rodando com sucesso!");
});

app.listen(port, () => {
  console.log(`Servidor backend ouvindo em http://localhost:${port}`);
});