import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const complex = ()=>{
    setTimeout(()=>{
      setValue((prevValue)=>{
        return prevValue + 1
      })
    }, 2000)
  }
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>Complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={ complex}>
          increase
        </button>
        
      </section>
    </>
  );
};

export default Counter;
