import React from "react";

import data from "../data/data.json";

function MainHeader() {
  const { personal } = data;
  return (
    <>
      <h1 className="text-4xl font-normal text-gray-900 mb-4">
        {personal.name}
      </h1>
      <p className="text-gray-500 text-xs pb-4">{personal.tagline}</p>
    </>
  );
}

export default MainHeader;
