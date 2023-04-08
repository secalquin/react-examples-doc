import React from "react";
import "./styles.css";

type Props = {};

const Home = (props: Props) => {
  return (
    <section className="main-section">
      <div className="section-one">
        <div className="title">
          <h1>Sebastián Calquín</h1>
        </div>
        <div className="sub-title">
          <h6>Software Engineer</h6>
        </div>
        <div className="social-buttons">
          <a
            href="https://www.linkedin.com/in/sebastian-calquin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.github.com/secalquin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="section-two">
        <div className="about-me">
          <p>
            I am a Software Engineer with 5 years of experience , I am
            self-taught, I like challenges, I am not afraid of change and I am
            very proactive. I like to create reliable work environments where we
            can all share ideas.
          </p>
          <br />
          <p>
            I am a person who likes to learn new things, I am always looking for
            a way to improve myself, I am a person who likes to work in a team
            and I am very responsible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
