import "./NewsCard.css"; // Adjust the import path as needed

const NewsCard = ({ article }) => {
  // Format the date
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  return (
    <li className="news__card">
      <div className="news__card_container">
        <img className="card__img" src={article.urlToImage} alt="news image" />
        <div className="card__info">
          <p className="card__date">{formattedDate}</p>
          <h2 className="card__title">{article.title}</h2>
          <p className="card__description">{article.description}</p>
          <p className="card__source">{article.source.name}</p>
        </div>
      </div>
    </li>
  );
};

export default NewsCard;
