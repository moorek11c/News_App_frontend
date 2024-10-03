import "./About.css";

import authorImg from "../../Assets/IMG_2350.png";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <img className="about__img" src={authorImg} alt="Author" />
        <div className="about__content">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            My name is Ryan and I am a full-stack web developer. I have a
            passion for building, and creating. I am always looking for new
            challenges and ways to improve my skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
