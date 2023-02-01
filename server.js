const express = require("express");
const path = require("path");
const fs = require("fs");
const { uuid } = require("uuidv4");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/articles", (req, res) => {});

app.get("/api/article", (req, res) => {});

app.post("/api/article", (req, res) => {
  const { title, content } = req.body ?? {};
  const articleData = JSON.parse(
    fs.readFileSync("./articles.json", { encoding: "utf-8" })
  );
  const newArticle = { id: uuid(), title, content };
  articleData.articles.push(newArticle);
  fs.writeFileSync("./articles.json", JSON.stringify(articleData), {
    encoding: "utf8",
  });
  res.status(201).json(newArticle).end();
});

app.listen(8888);
