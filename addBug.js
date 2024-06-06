import React from “react”;
import { useDispatch } from “react-redux”;
import { addBug } from “./slices/bugSlice”;

const AddBug = () => {
  const dispatch = useDispatch();
  const newBug = {
    title: “Bug1”,
    id: 1,
  };
  dispatch(addBug(newBug));

  return <div>AddBug</div>;
};

export default AddBug;
