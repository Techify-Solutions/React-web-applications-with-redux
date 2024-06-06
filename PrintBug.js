import React from “react”;
import { useSelector } from “react-redux”;

const PrintBug = () => {
  const bugs = useSelector((state) => state.bugs);
  console.log(“bugs”, bugs);
  
  return <div>PrintBug</div>;
};

export default PrintBug;
