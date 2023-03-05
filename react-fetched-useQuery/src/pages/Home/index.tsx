import React from "react";
import reactLogo from "../../assets/react.svg";
import ListPost from "../../components/Post";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ListPost />
      </div>
    </div>
  );
};

export default Home;
