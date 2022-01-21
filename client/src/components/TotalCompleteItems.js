import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const totalCompleteItems = useSelector(
    (state) => state.todos.filter((todo) => todo.completed).length
  );
  return <h4 className="mt-3">Total Complete Items: {totalCompleteItems}</h4>;
};

export default TotalCompleteItems;
