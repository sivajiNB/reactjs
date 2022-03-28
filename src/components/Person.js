import React from "react";

function person({ pp }) {
  return (
    <div>
      <h1>
        {" "}
        i am {pp.name} and i am {pp.age} years old. and i know
        {pp.sill}
      </h1>
    </div>
  );
}

export default person;
