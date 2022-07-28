import React, { useState } from "react";
import "./App.css";
import List from "./List";

const Birthday = ({people}) => {

  return (
    <>
      <div className="box">
        <List people={people} />
      </div>
    </>
  );
};

export default Birthday;
