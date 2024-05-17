import React from "react";
import { YellowButton } from "./components/YellowButton";

const Page = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(assets/landingBG.png)" }}
    >
      <div className="flex items-center justify-between py-12 h-full w-full bg-black bg-opacity-50  flex-col">
        <div className="flex flex-row gap-12 justify-between  w-11/12">
          <div className="flex flex-row gap-12">
            <YellowButton componen  tWidth="w-24">
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
            <YellowButton componentWidth="w-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M7 21v-2h4v-3.1q-1.225-.275-2.187-1.037T7.4 12.95q-1.875-.225-3.137-1.637T3 8V7q0-.825.588-1.412T5 5h2V3h10v2h2q.825 0 1.413.588T21 7v1q0 1.9-1.263 3.313T16.6 12.95q-.45 1.15-1.412 1.913T13 15.9V19h4v2zm0-10.2V7H5v1q0 .95.55 1.713T7 10.8m10 0q.9-.325 1.45-1.088T19 8V7h-2z"
                ></path>
              </svg>
            </YellowButton>
          </div>
          <YellowButton componentWidth="w-44">Module</YellowButton>
        </div>

        <h1 className=" outline-title text-white text-8xl font-bold text-center w-11/12">
          Welcome Home
        </h1>
        <div className="flex flex-row gap-12 w-11/12 justify-center mb-16">
          <YellowButton componentWidth="w-64">
            <a href="">Account</a>
          </YellowButton>

          <a href="/levels">
            <YellowButton componentWidth="w-64">Play</YellowButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
