const SERVER_HOST = "http://localhost:8888";

export const getArticles = async () => {
  try {
    const articles = await fetch(`${SERVER_HOST}/api/articles`);
    return await articles.json();
  } catch (e) {
    console.error(e);
  }
};

export const createArticle = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return fetch(`${SERVER_HOST}/api/article`, {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateArticle = async () => {};
export const deleteArticle = async () => {};
