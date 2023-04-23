import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

const TaskShow = ({ taskObject, getTaskId, onAfterEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  function handleDelete() {
    getTaskId(taskObject.id);
  }

  function handleEdit() {
    setShowEdit(true);
  }

  function handleSubmit(id, title, description) {
    setShowEdit(false);
    onAfterEdit(id, title, description);
  }

  return (
    <>
      {showEdit ? (
        <TaskCreate
          taskEdit={taskObject}
          editShow={true}
          onChange={handleSubmit}
        />
      ) : (
        <div className="task-display">
          <h5 className="text-primary">Your task</h5>
          <p>{taskObject.title}</p>
          <h5 className="text-primary mt-3">To-do list</h5>
          <p>{taskObject.description}</p>
          <div className="mt-4">
            <button
              onClick={handleDelete}
              className="btn btn-sm btn-danger me-3"
            >
              Delete
            </button>
            <button onClick={handleEdit} className="btn btn-sm btn-primary">
              Edit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskShow;
