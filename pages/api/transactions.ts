import fetch from "node-fetch";

const API_URL = "https://recruitment-test.flip.id/frontend-test";

export default async function handler(_, res) {
  const response = await fetch(`${API_URL}`);
  const booksData = await response.json();

  res.json(booksData);
}
