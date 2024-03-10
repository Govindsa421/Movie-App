import { useMemo, useState } from "react";

const LCAComponent = () => {
  const [test, setTest] = useState(false);

  const toggleState = () => {
    setTest((prevState) => !prevState);
  };
  const memoizedTestProp = useMemo(() => ({ test }), [test]);

  return (
    <div>
      <button onClick={toggleState}>Toggle State</button>
      <ChildComponent memoizedProp={memoizedTestProp} />
      <DeeplyNestedComponent test={test} />
    </div>
  );
};

const ChildComponent = ({ memoizedProp }) => {
  return <p>ChildComponent: {memoizedProp ? "True" : "False"}</p>;
};

const DeeplyNestedComponent = ({ test }) => {
  return <p>DeeplyNestedComponent : {test ? "True" : "False"}</p>;
};

export default LCAComponent;
