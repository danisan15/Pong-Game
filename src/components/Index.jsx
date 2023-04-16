import React, { useEffect, useState, useRef } from "react";

export const PaddleOne = () => {
  const [y1, setY1] = useState(40);
  const paddle1 = useRef(null);

  const player1 = (code) => {
    if (code === "KeyW" && y1 > 0) setY1((prevState) => prevState - 5);
    if (code === "KeyS") setY1((prevState) => prevState + 5);
  };
  const handleKey = () => {
    window.addEventListener("keydown", (e) => {
      let topPosition1 = paddle1.current.style.top;
      topPosition1 = topPosition1.slice(0, topPosition1.length - 1);
      switch (e.code) {
        case "KeyS":
          if (topPosition1 >= 80) break;
          player1(e.code);
          break;
        case "KeyW":
          if (topPosition1 <= 0) break;
          player1(e.code);
          break;
        default:
          break;
      }
    });
  };

  useEffect(handleKey, []);

  return (
    <div>
      {y1}
      <div style={{ top: `${y1}%` }} id="paddle1" ref={paddle1}></div>
      <br />
    </div>
  );
};

export const PaddleTwo = () => {
  const [y2, setY2] = useState(40);
  const paddle2 = useRef(null);

  const player2 = (code) => {
    if (code === "ArrowUp") setY2((prevState) => prevState - 5);
    if (code === "ArrowDown") setY2((prevState) => prevState + 5);
  };

  const handleArrow = () => {
    window.addEventListener("keydown", (e) => {
      e.preventDefault();
      e.stopPropagation();
      let topPosition2 = paddle2.current.style.top;
      topPosition2 = topPosition2.slice(0, topPosition2.length - 1);
      switch (e.code) {
        case "ArrowUp":
          if (topPosition2 <= 0) break;
          player2(e.code);
          break;
        case "ArrowDown":
          if (topPosition2 >= 80) break;
          player2(e.code);
          break;
        default:
          break;
      }
    });
  };

  useEffect(handleArrow, []);

  return (
    <div>
      <div style={{ top: `${y2}%` }} id="paddle2" ref={paddle2}></div>
      {y2}
    </div>
  );
};

export const Counter = () => {
  return (
    <div>
      <div className="counter-container">
        <p className="counter-number1">0</p>
        <p className="counter-number2">0</p>
      </div>
    </div>
  );
};

export const Ball = ({ pull_score }) => {
  const [ballX, setBallX] = useState(50);
  const [ballY, setBallY] = useState(50);
  const ball = useRef(null);

  const firstMovement = () => {
    setBallX(Math.floor(Math.random() * (60 - 40)) + 40);
    setBallY(Math.floor(Math.random() * (60 - 40)) + 40);
  };

  const moveLeft = () => {
    setBallX((prevState) => prevState - 1);
  };

  const moveRight = () => {
    setBallX((prevState) => prevState + 1);
  };

  const moveUp = () => {
    setBallY((prevState) => prevState - 1);
  };

  const moveDown = () => {
    setBallY((prevState) => prevState + 1);
  };

  const resetPosition = (interval) => {
    let ballPositionX = ball.current.style.top;
    console.log(interval);
    clearInterval(interval);
  };

  const ballMovement = () => {
    let ballPositionY = ball.current.style.top;
    let ballPositionX = ball.current.style.left;
    ballPositionY = parseInt(ballPositionY.slice(0, ballPositionY.length - 1));
    ballPositionX = parseInt(ballPositionX.slice(0, ballPositionX.length - 1));
    if (ballPositionX === 50 && ballPositionY === 50) firstMovement();
    //if (ballPositionX > 50 && ballPositionY > 50) {}
    //const intervalRight = setInterval(moveRight, 200);
    moveRight();
    //setInterval(moveDown, 200);
    //setInterval((intervalRight) => resetPosition(intervalRight), 200);
  };

  useEffect(() => console.log("rendering"), []);
  //useEffect(ballMovement, []);

  return (
    <div>
      <div
        className="ball"
        style={{ top: `${ballY}%`, left: `${ballX}%` }}
        ref={ball}
      ></div>
      {ballX}
    </div>
  );
};
