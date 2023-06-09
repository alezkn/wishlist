import express, { Request, Response } from "express";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
const port = 5000;

// Habilitar o CORS
app.use(cors());
// Analisar o corpo da solicitação como JSON
app.use(express.json());

app.post("/product", (req: Request, res: Response) => {
  const { name, description, link, userId, dateAdded } = req.body;
  const db = new sqlite3.Database("../database/wishlist_database.db");

  const sql = `INSERT INTO products (name, description, link, userId, dateAdded) VALUES (?, ?, ?, ?, ?)`;
  const values = [name, description, link, userId, dateAdded];
  db.run(sql, values, function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Erro ao adicionar o produto" });
    } else {
      res.json({ message: "Produto adicionado com sucesso" });
    }

    db.close();
  });
});

app.delete("/product/:id", (req: Request, res: Response) => {
  const productId = req.params.id;
  const db = new sqlite3.Database("../database/wishlist_database.db");

  const sql = "DELETE FROM products WHERE id = ?";
  db.run(sql, productId, function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Erro ao excluir o produto" });
    } else {
      res.json({ message: "Produto excluído com sucesso" });
    }

    db.close();
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
