import React from "react";
import { YellowButton } from "./../components/YellowButton";
import { LevelsButton } from "./../components/LevelsButton";

const Page = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(assets/landingBG.png)" }}
    >
      <div className="flex items-center justify-between py-12 h-full w-full bg-black bg-opacity-50  flex-col">
        <div className="flex flex-row gap-12 justify-between w-11/12">
          <div className="flex flex-row gap-12">
            <a href="/">
              <YellowButton componentWidth="w-24">--</YellowButton>
            </a>
          </div>
          <YellowButton componentWidth="w-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"
              ></path>
            </svg>
          </YellowButton>
        </div>

        <div className="grid grid-cols-4 gap-12 w-4/12 mb-36">
          <a href="/gameplay">
            <LevelsButton componentWidth="w-24">1</LevelsButton>
          </a>
          <a href="/gameplay">
            <LevelsButton componentWidth="w-24">2</LevelsButton>
          </a>{" "}
          <a href="/gameplay">
            <LevelsButton componentWidth="w-24">3</LevelsButton>
          </a>{" "}
          <a href="/gameplay">
            <LevelsButton componentWidth="w-24">4</LevelsButton>
          </a>{" "}
          <a href="/gameplay">
            <LevelsButton componentWidth="w-24">5</LevelsButton>
          </a>{" "}
          <a href="/gameplay">
            <LevelsButton componentWidth="w-24">6</LevelsButton>
          </a>{" "}
          <a href="/gameplay">
            <LevelsButton componentWidth="w-24">7</LevelsButton>
          </a>{" "}
          <a href="/gameplay">
            <LevelsButton componentWidth="w-24">8</LevelsButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
