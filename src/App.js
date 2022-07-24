import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SingleMovie from "./components/SingleMovie";
import Error from "./error/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"movies/:id"} element={<SingleMovie />} />
        <Route path={"*"} element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
