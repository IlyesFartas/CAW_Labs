import React, { useState } from 'react';

function ToggleButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
      <p>{clicked ? 'Clicked' : 'Not Clicked'}</p>
    </div>
  );
}

export default ToggleButton;
