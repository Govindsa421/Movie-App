import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const Count = () => {
  const [count, setCount] = useState(0);
  const [ii, setIi] = useState("govind");

  const updateName = useCallback(() => {
    setIi("Pragati");
  }, []);
  return (
    <div>
      <Child ii={ii} update={updateName} />
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default Count;
