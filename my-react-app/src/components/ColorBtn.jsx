import React from "react";

function ColorBtn({ bgColor, colorName, getColor }) {
  const getClickedColor = () => {
    console.log(bgColor);
    if (getColor) {
      getColor(bgColor);
    }
  };
  return (
    <>
      <button
        type="button"
        onClick={getClickedColor}
        className={`focus:outline-none mr-2 p-4 text-black border-solid border-2 border-gray ${bgColor}`}
      >
        {colorName}
      </button>
    </>
  );
}

export default ColorBtn;
