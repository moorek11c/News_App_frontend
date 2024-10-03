import dayjs from "dayjs";
import { API_KEY, BASE_URL } from "../Config/Config";

// Function to get news from News API
const getNews = async (query) => {
  const currentDate = dayjs().format("YYYY-MM-DD");
  const sevenDaysAgo = dayjs().subtract(7, "day").format("YYYY-MM-DD");

  const url = new URL(BASE_URL);
  url.searchParams.append("q", query);
  url.searchParams.append("from", sevenDaysAgo);
  url.searchParams.append("to", currentDate);
  url.searchParams.append("apiKey", API_KEY);
  url.searchParams.append("pageSize", 100);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response data:", errorData);
      console.error("Error response status:", response.status);
      console.error("Error response headers:", response.headers);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    if (error.name === "TypeError" && error.message === "Failed to fetch") {
      // The request was made but no response was received
      console.error("Error request data:", error.message);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error message:", error.message);
    }
    throw error;
  }
};

const saveCard = async (article) => {
  try {
    const response = await fetch("http://localhost:3001/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response data:", errorData);
      console.error("Error response status:", response.status);
      console.error("Error response headers:", response.headers);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to save article:", error);
    throw error;
  }
};

const getSavedArticles = async () => {
  try {
    const response = await fetch("http://localhost:3001/cards");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Extract the nested article object
    const articles = data.map((item) => ({
      id: item.id,
      ...item.article,
      source: item.article.source,
      isSaved: item.isSaved,
      query: item.query,
    }));

    return articles;
  } catch (error) {
    console.error("Error fetching saved articles:", error);
    return [];
  }
};

export { getNews, saveCard, getSavedArticles };
