import { Counter, PaddleOne, PaddleTwo, Ball } from "./components/Index";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [score, setScore] = useState(0);

  const pull_score = (data) => setScore(data);

  return (
    <div className="App">
      <Counter />
      <PaddleOne />
      <PaddleTwo />
      <Ball pull_score={pull_score} />
    </div>
  );
}

export default App;
