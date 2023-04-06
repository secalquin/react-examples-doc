import React from "react";
import "./styles.css";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className="presentation">
        <h1 className="title">Sebastián Calquín</h1>
        <p>
          Santiago Chile,{" "}
          <a href="mailto:scalquin0305@gmail.com">scalquin0305@gmail.com</a>
        </p>
      </div>
      <div className="about-me">
        I am a Software Engineer with 5 years of experience , I am self-taught,
        I like challenges, I am not afraid of change and I am very proactive. I
        like to create reliable work environments where we can all share ideas.
      </div>
    </>
  );
};

export default Home;
