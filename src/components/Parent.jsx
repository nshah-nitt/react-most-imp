import React, { useCallback, useEffect, useMemo, useState } from "react";
import Child from "./Child";
import Factorial from "./getFact";
import "./index.css";

const Parent = () => {
  const [count, updateCount] = useState(0);
  const [theme, setTheme] = useState("light");
  // const [time, updateTime] = useState(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     updateTime((time) => {
  //       if (time + 1 >= 10) {
  //         clearInterval(id);
  //         return 10;
  //       }
  //       return time + 1;
  //     });
  //   }, 1000);

  //   return () => {
  //     clearInterval(id);
  //   };
  // }, [count]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // 1. Define the handler function inside the effect
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // 2. Attach the listener
    window.addEventListener("resize", handleResize);

    // 3. Cleanup: Remove the listener using the same function reference
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    const getLargeValue = useMemo(() => {
      const new_value = new Factorial(count).computeFactorial();

      console.log(new_value);

      return new_value;
    }, [count]);

  // is useMemo is not used this would be recalculated at every render
  // const getLargeValue = () => {
  //   const new_value = new Factorial(count).computeFactorial();

  //   console.log(new_value);

  //   return new_value;
  // }

  return (
    <>
      <div className={`bg-${theme}`}>
        <h1>
          {count}
          <br></br>
          {windowWidth}
        </h1>
        <button onClick={() => updateCount((prev) => prev + 1)}>+</button>
        <button
          onClick={() => updateCount((prev) => (prev > 0 ? prev - 1 : 0))}
        >
          -
        </button>
        <button
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          Change Theme
        </button>
      </div>

      <div>
        <h1>large value</h1>
        <h1>{getLargeValue}</h1>
      </div>

      <Child />
    </>
  );
};

export default Parent;
