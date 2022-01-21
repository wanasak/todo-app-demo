import React from "react";
import { useDispatch } from "react-redux";
import { toggleCompleteAsync, deleteTodoAsync } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispacth = useDispatch();

  const handleToggleComplete = () => {
    dispacth(toggleCompleteAsync({ id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispacth(deleteTodoAsync({ id }));
  };

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            onChange={handleToggleComplete}
            type="checkbox"
            className="mr-3"
            checked={completed}
          />
          {title}
        </span>
        <button onClick={handleDeleteClick} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
