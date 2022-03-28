import React, { useState } from "react";

function HookUseState3(props) {
  const [name, setname] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setname({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setname({ ...name, lastName: e.target.value })}
        />
      </form>
      <h2>your first name is-{name.firstName}</h2>
      <h2>your last namew is -{name.lastName}</h2>
    </div>
  );
}
// usestate with objects
//not merge automatically we need merge manually
export default HookUseState3;
