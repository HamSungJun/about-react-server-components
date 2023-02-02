/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const fs = require("fs");
const { uuid } = require("uuidv4");
const cors = require("cors");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");

dayjs.extend(utc);
const app = express();

const getArticles = () => {
  return JSON.parse(fs.readFileSync("./articles.json", { encoding: "utf-8" }));
};
const writeArticles = (obj) => {
  return fs.writeFileSync("./articles.json", JSON.stringify(obj), {
    encoding: "utf-8",
  });
};

app.use(cors());
app.use(express.json());

app.get("/api/articles", (req, res) => {
  const articles = getArticles();
  res.status(200).json(articles).end();
});

app.get("/api/article", (req, res) => {
  const { id } = req.query;
  const article = getArticles().articles.find((article) => article.id === id);
  res.status(200).json(article).end();
});

app.post("/api/article", (req, res) => {
  const { title, content } = req.body ?? {};
  const articleData = getArticles();
  const newArticle = {
    id: uuid(),
    title,
    content,
    createdAt: dayjs.utc().unix() * 1000,
  };
  articleData.articles.unshift(newArticle);
  writeArticles(articleData);
  res.status(201).json(newArticle).end();
});

app.listen(8888);
