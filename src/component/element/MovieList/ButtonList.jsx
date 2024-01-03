import React from "react";

function ButtonList() {
  return (
    <div className="button ms-16 flex gap-4">
      <button className="px-4 py-2 text-white bg-cyan rounded-full">
        Movies
      </button>
      <button className="px-4 py-2 text-cyan border border-cyan rounded-full">
        TV Show
      </button>
    </div>
  );
}

export default ButtonList;
