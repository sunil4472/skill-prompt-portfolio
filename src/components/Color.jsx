import { useState, useEffect } from "react";

const Color = () => {
  const [bgColor, setBgColor] = useState("pink");

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;

    return () => {
      document.body.style.backgroundColor = null;
    };
  }, [bgColor]);

  return (
    <div className="ml-100 mt-100 mb-100 items-center gap-6">
      <div className="flex gap-4">
        <button
          onClick={() => setBgColor("red")}
          className="px-6 py-3 bg-red-500 text-white rounded "
        >
          Red
        </button>
        <button
          onClick={() => setBgColor("blue")}
          className="px-6 py-3 bg-blue-500 text-white rounded "
        >
          Blue
        </button>
        <button
          onClick={() => setBgColor("green")}
          className="px-6 py-3 bg-green-500 text-white rounded "
        >
          Green
        </button>
      </div>
    </div>
  );
};

export default Color;
