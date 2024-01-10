import { useState } from "react";
import "../../my-react-app/src/index.css";
import ColorBtn from "./components/ColorBtn";

function App() {
  const [colors, setColors] = useState([
    { id: 1, color: "bg-red-400", name: "Red" },
    { id: 2, color: "bg-green-400", name: "Green" },
    { id: 3, color: "bg-yellow-400", name: "Yellow" },
  ]);
  const [pageColor, setPageColor] = useState("bg-white");

  const getClickedColor = (selectedColor) => {
    console.log("hello kitty");
    setPageColor(selectedColor);
  };
  return (
    <div className={`${pageColor} w-full h-screen`}>
      {colors.map((color, index) => (
        <ColorBtn
          key={color.id}
          bgColor={color.color}
          colorName={color.name}
          getColor={getClickedColor}
        />
      ))}
    </div>
  );
}

export default App;
