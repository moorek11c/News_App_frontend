import axios from "axios";
import dayjs from "dayjs";

const API_KEY = "2bbf748988f743cb93167c17ca8aa87d";
const BASE_URL = "https://newsapi.org/v2/everything";

// Function to get news from News API

const getNews = async (query) => {
  const currentDate = dayjs().format("YYYY-MM-DD");
  const sevenDaysAgo = dayjs().subtract(7, "day").format("YYYY-MM-DD");

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        from: sevenDaysAgo,
        to: currentDate,
        sortBy: "popularity",
        apiKey: API_KEY,
        pageSize: 100,
      },
    });
    return response.data.articles;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error request data:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error message:", error.message);
    }
    console.error("Error config:", error.config);
    throw error;
  }
};

export default getNews;
