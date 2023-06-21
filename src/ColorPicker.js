import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className="color-picker">
      <button onClick={() => setShowColorList(!showColorList)}>
        <h2>Pick a color</h2>
      </button>
      {showColorList && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li
              key={index}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></li>
          ))}
        </ul>
      )}
      {selectedColor && (
        <div className="selected-color">
          You picked: <span style={{ backgroundColor: selectedColor }}>{selectedColor}</span>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
