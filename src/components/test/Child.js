import React, { memo } from "react";

const Child = ({ ii, update }) => {
  console.log("hello govind");
  return (
    <div>
      <p>{ii}</p>
      <button onClick={update}>Update Name</button>
    </div>
  );
};

export default memo(Child);
