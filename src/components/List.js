import React from "react";
import Person from "./Person";
function car(props) {
  return <li>i am {props.brand}</li>;
}

function List() {
  let cars = ["bmw", "ford", "audi"];
  let personList = [
    {
      id: 1,
      name: "sivaji",
      age: 21,
      sill: "reactjs",
    },
    {
      id: 2,
      name: "eswar",
      age: 21,
      skill: "aws",
    },
  ];
  const pp = personList.map((person) => <h3>{person.age}</h3>);
  const fs = personList.map((pp) => <Person key={pp.id} pp={pp} />);

  return (
    <>
      <h1> this is the car list in my garge</h1>
      {cars.map((name) => (
        <h2>{name}</h2>
      ))}
      {personList.map((person) => (
        <h2>
          i am {person.name} and i am {person.age} years old. and i know
          {person.sill}
        </h2>
      ))}
      <div>{pp}</div>
      <div>{fs}</div>
    </>
  );
}

export default List;
