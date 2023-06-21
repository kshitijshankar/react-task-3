import React from 'react';
import ColorPicker from './ColorPicker';
import './colorPicker.css';

const App = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];

  return (
    <div className="app">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;

