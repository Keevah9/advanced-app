import React, { useState } from "react";
import "./App.css";
import { data } from "./Data";

const List = () => {
  const [people, setPerson] = useState(data);
  const handleBtn = () => {
    setPerson([]);
  };

  const handleDel = (id) => {
    setPerson((del) => {
      let delet = del.filter((check) => check.id !== id);

      console.log(delet);
      return delet;
    });
  };

  return (
    <>
      <h3>{people.length} birthdays today</h3>
      {people.map((person) => {
        const { image, id, age, name } = person;

        return (
          <div className="con" key={id}>
            <img src={image} alt={name} />
            <div className="person">
              <h4>{name}</h4>
              <span>{age} years</span>
            </div>
            <button className="btn btn1" onClick={() => handleDel(id)}>
              X
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={handleBtn}>
        Clear all
      </button>
    </>
  );
};

export default List;
