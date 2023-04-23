import React, { useState } from "react";
import TaskCreate from "./Components/TaskCreate";
import "bootstrap/dist/css/bootstrap.css";
import { v4 as uuidv4 } from "uuid";
import TaskList from "./Components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  function getTasksAndSet(title, description) {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: title,
        description: description,
      },
    ]);
  }
  

  function deleteTask(id) {
    const afterDeletedTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(afterDeletedTasks);
  }

  function editedTask(id, updateTitle, updateDescription) {
    const editTaskArray = tasks.map((task) => {
      if (task.id === id) {
        return {
          id: id,
          title: updateTitle,
          description: updateDescription,
        };
      }
      return task;
    });
    setTasks(editTaskArray);
  }
  console.log(tasks);
  return (
    <div className="main">
      <h4 className="mt-2">Please Add a Task!</h4>
      <TaskCreate getTasks={getTasksAndSet} />
      <h3 className="mt-4 mb-4">Task Lists</h3>
      <TaskList
        taskListArray={tasks}
        taskId={deleteTask}
        onAfterEdit={editedTask}
      />
    </div>
  );
};

export default App;
