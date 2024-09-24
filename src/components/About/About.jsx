import "./About.css";

import authorImg from "../../Assets/IMG_2350.png";

function About() {
  return (
    <div>
      <div className="about">
        <div className="about__container">
          <img className="about__img" src={authorImg} alt="Author" />
          <div className="about__content">
            <h2 className="about__title">About the author</h2>
            <p className="about__description">
              This block describes the project author. Here you should indicate
              your name, what you do, and which development technologies you
              know. You can also talk about your experience with TripleTen, what
              you learned there, and how you can help potential customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
