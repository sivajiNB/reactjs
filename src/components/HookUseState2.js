import React, { useState } from "react";
function HookUseState2(props) {
  const initialvalue = 0;
  const [count, setcount] = useState(0);
  return (
    <div>
      count{count}
      <button onClick={() => setcount(count - 1)}>decrease</button>
      <button onClick={() => setcount(initialvalue)}>reset</button>
      <button onClick={() => setcount(count + 1)}>increase</button>
    </div>
  );
}

export default HookUseState2;
