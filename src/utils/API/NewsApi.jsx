import dayjs from "dayjs";
import { API_KEY, BASE_URL } from "../Config";
import { SavedNewsData } from "../Config/SavedNewsData";

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

// utils/API/NewsApi.js
let mockSavedArticles = [];

const saveCard = async (article) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // Simulate saving the article
        article.id = mockSavedArticles.length + 1; // Assign a new ID
        mockSavedArticles.push(article);
        resolve(article);
      } catch (error) {
        console.error("Failed to save article:", error);
        reject(error);
      }
    }, 500);
  });
};

export default saveCard;

function getSavedArticles() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(SavedNewsData);
    }, 500)
  );
}

export { getNews, saveCard, getSavedArticles };
