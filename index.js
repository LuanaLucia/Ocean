const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb+srv://admin:0SFg64mqRslmbPaX@cluster0.taniag6.mongodb.net/?retryWrites=true&w=majority";
const bancoDadosNome = "ocean_jornada_fullstack";

async function main() {

  const client = await MongoClient.connect(url);
  const bancoDados = client.db(bancoDadosNome);
  const collection = bancoDados.collection("itens");

  const app = express();
  const port = 3000;

  // Sinalizar uso de Json
  app.use(express.json());

  // listar itens
  const itens = {
    Cafe: [
      { Tipo: "Café Pelé", id: "1" },
      { Tipo: "Café Pilão", id: "2" },
      { Tipo: "Café Arábico", id: "3" },
    ],
  };

  // endpoint [get] READ ALL
  app.get("/itens", async (req, res) => {
    const documentos = await collection.find().toArray();
    res.send(documentos);
  });

  // endpoint [get] READ one
  app.get("/itens/:id", async (req, res) => {
    const id = req.params.id;

    const item = await collection.findOne({
      _id: new ObjectId(id),
    });

    res.send(item);
  });

  // endpoint [put] UPDATE
  app.put("/itens/:id", async (req, res) => {
    const id = req.params.id;
    const item = req.body;

    await collection.updateOne({ _id: new ObjectId(id) }, { $set: item });

    res.send("Item atualizado com sucesso!");
  });

  // endpoint [delete] DELETE
  app.delete("/itens/:id", async (req, res) => {
    const id = req.params.id;

    // Remove o item do banco de dados
    await collection.deleteOne({
      _id: new ObjectId(id),
    });

    // Exibimos uma mensagem de sucesso
    res.send("Item removido com sucesso!");
  });

  // endpoint [post]
  app.post("/itens", async (req, res) => {
    const item = req.body;
    await collection.insertOne(item);
    res.send("Item inserido");
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  //0SFg64mqRslmbPaX
}

main();
