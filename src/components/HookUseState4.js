import React, { useState } from "react";

function HookUseState4(props) {
  const [items, setitems] = useState([]);
  const addItem = () => {
    setitems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
//with array
export default HookUseState4;
