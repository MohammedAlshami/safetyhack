"use client";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { YellowButton } from "../components/YellowButton";
import {actionsDict} from "./Scenarios";

export default function Home() {
  const [currentScenario, setCurrentScenario] = useState("start");
  const [previousScenario, setPreviousScenario] = useState(null);
  const [showActions, setShowActions] = useState(false);
  const [showError, setShowError] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let timer;
    if (showActions && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0 && showActions) {
      setShowError(true);
      setShowActions(false);
      setTimeout(() => {
        setShowError(false);
        setCurrentScenario(previousScenario);
        setCountdown(actionsDict[previousScenario].countdown || 0);
        setShowActions(true);
      }, 3000); // Hide error after 3 seconds and restart previous scenario
    }
    return () => clearInterval(timer);
  }, [showActions, countdown, previousScenario]);

  const handleEnded = () => {
    if (actionsDict[currentScenario].isCorrect) {
      setCountdown(actionsDict[currentScenario].countdown || 0);
      setShowActions(true);
    } else {
      setShowError(true);
      setShowActions(false);
      setTimeout(() => {
        setShowError(false);
        setCurrentScenario(previousScenario);
        setCountdown(actionsDict[previousScenario].countdown || 0);
      }, 3000); // Hide error after 3 seconds and restart previous scenario
    }
  };

  const handleActionClick = (action) => {
    setPreviousScenario(currentScenario);
    setCurrentScenario(action.next);
    setShowActions(false);
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-black">
      <ReactPlayer
        url={actionsDict[currentScenario].videoUrl}
        playing={gameStarted}
        onEnded={handleEnded}
        width="100%"
        height="100%"
        muted
      />

      {!gameStarted && (
        <button
          onClick={handleStartGame}
          className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75 text-white py-2 px-4 rounded-md text-2xl"
        >
          <YellowButton componentWidth="w-32">Start</YellowButton>
        </button>
      )}

      {showActions && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {actionsDict[currentScenario].actions.map((action, index) => (
            <button
              key={index}
              className="text-black rounded-md transition duration-300"
              onClick={() => handleActionClick(action)}
            >
              <YellowButton componentWidth="w-64">{action.label}</YellowButton>
            </button>
          ))}
        </div>
      )}

      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <div className="flex flex-row gap-12 justify-between  w-11/12">
          {showActions && countdown > 0 && (
            <YellowButton componentWidth="w-64 text-center text-white text-3xl font-bold text-stroke">
              Countdown: <br />
              {countdown} seconds
            </YellowButton>
          )}
        </div>
      </div>

      {showError && (
        <div className="absolute inset-0 flex justify-center items-center bg-red-600 text-white py-4 px-6 rounded-md text-2xl">
          Wrong Action
        </div>
      )}

      <a className="absolute top-10 left-36 transform -translate-x-1/2 flex space-x-4">
        <YellowButton componentWidth="w-32">----</YellowButton>
      </a>
    </div>
  );
}
