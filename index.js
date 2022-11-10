const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017";
const bancoDadosNome = "ocean_jornada_fullstack";

async function main() {

  const client = await MongoClient.connect(url);
  const bancoDados = client.db(bancoDadosNome);
  const collection = bancoDados.collection("itens");

  const app = express();
  const port = 3000;

  // Sinalizar uso de Json
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Hello Word!");
  });

  app.get("/oi", (req, res) => {
    res.send("Helo Word!");
  });

  // listar itens
  const itens = {
    Cafe: [
      { Tipo: "Café Pelé", id: "1" },
      { Tipo: "Café Pilão", id: "2" },
      { Tipo: "Café Arábico", id: "3" },
    ],
  };

  // endpoint [get] READ ALL
  app.get("/itens", (req, res) => {
    res.send(itens.Cafe.filter(Boolean));
  });

  // endpoint [get] READ one
  app.get("/itens/:id", (req, res) => {
    const id = req.params.id;

    const item = itens.Cafe.filter(function (a) {
      console.log(id);
      return a.id === id;
    });
    res.send(item);
  });

  // endpoint [put] UPDATE
  app.put("/itens/:id", (req, res) => {
    const id = req.params.id;
    itens.Cafe[id] = req.body;
    res.send(itens);
  });

  // endpoint [delete] DELETE
  app.delete("/itens/:id", (req, res) => {
    const id = req.params.id;
    delete itens.Cafe[id];
    res.send(itens);
  });

  // endpoint [post]
  app.post("/itens", (req, res) => {
    const item = req.body;
    itens.Cafe.push(item);
    res.send(itens);
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main();
