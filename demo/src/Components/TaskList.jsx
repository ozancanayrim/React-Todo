import React from "react";
import TaskShow from "./TaskShow";

const TaskList = ({ taskListArray, taskId, onAfterEdit }) => {
  return (
    <div className="task-list">
      {taskListArray.map((task) => {
        return (
          <TaskShow
            key={task.id}
            taskObject={task}
            getTaskId={taskId}
            onAfterEdit={onAfterEdit}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
