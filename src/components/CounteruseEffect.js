import { useState, useEffect } from "react";
function CounteruseEffect() {
  const [count, setcount] = useState(0);
  const [calculation, setcalculation] = useState(0);
  useEffect(() => {
    setcalculation(() => count * 2);
  }, [count]);

  return (
    <div>
      count: {count}
      <button onClick={() => setcount(count + 1)}>+</button>
      <p>calculation {calculation}</p>
    </div>
  );
}
export default CounteruseEffect;
