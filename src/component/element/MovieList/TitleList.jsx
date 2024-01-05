import React from "react";

function TitleList({ title }) {
  return (
    <div className="title">
      <h1 className="font-bold font-roboto text-2xl">{title}</h1>
    </div>
  );
}

export default TitleList;
