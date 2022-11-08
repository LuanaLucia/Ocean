const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Word!");
});

app.get("/oi", (req, res) => {
  res.send("Helo Word!");
});

// listar itens
const itens = {
  Café: [
    { Tipo: "Café Pelé", id: 1 },
    { Tipo: "Café Pilão", id: 2 },
    { Tipo: "Café Arábico", id: 3 },
  ],
};

// endpoint  READ ALL
app.get("/itens", (req, res) => {
  res.send(itens);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
