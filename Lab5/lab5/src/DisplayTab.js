import React, { useState } from 'react';

function DisplayTab({ tab }) {
  const [items, setItems] = useState(tab);

  const handleClick = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => handleClick(index)}>
          Element {index + 1} is: {item}
        </li>
      ))}
    </ul>
  );
}

export default DisplayTab;
