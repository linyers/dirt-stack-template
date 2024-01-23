import * as React from "react";

const Index = (): React.ReactNode => {
  return (
    <>
      <h1 className="mt-10 text-blue-500 font-bold text-center text-6xl">
        D.I.R.T Stack Template
      </h1>
      <ul className="mt-10 text-4xl self-center text-white">
        <li>
          <span className="text-blue-500 font-semibold">D</span>jango
        </li>
        <li>
          <span className="text-blue-500 font-semibold">I</span>nertia
        </li>
        <li>
          <span className="text-blue-500 font-semibold">R</span>eact
        </li>
        <li>
          <span className="text-blue-500 font-semibold">T</span>ailwindCSS
        </li>
      </ul>
    </>
  );
};

export default Index;
