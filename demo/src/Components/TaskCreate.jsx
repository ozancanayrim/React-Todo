import React, { useState } from "react";

const TaskCreate = ({ getTasks, taskEdit, editShow, onChange }) => {
  const [title, setTitle] = useState(editShow ? taskEdit.title : "");
  const [description, setDescription] = useState(
    editShow ? taskEdit.description : ""
  );

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editShow) {
      onChange(taskEdit.id, title, description);
    } else {
      getTasks(title, description);
    }

    setTitle("");
    setDescription("");
  }

  return editShow ? (
    <div className="edit-task">
      <form onSubmit={handleSubmit} className="edit-form">
        <label>Edit Title!</label>
        <input
          onChange={handleTitle}
          value={title}
          className="form-control mt-2"
        />
        <label className="mt-2">Edit Description!</label>
        <textarea
          onChange={handleDescription}
          value={description}
          className="form-control mt-2"
          rows={4}
        ></textarea>
        <button className="btn btn-lg btn-warning mt-3">Update</button>
      </form>
    </div>
  ) : (
    <div className="create-task">
      <form onSubmit={handleSubmit} className="form">
        <label>Title</label>
        <input
          onChange={handleTitle}
          value={title}
          className="form-control mt-2"
        />
        <label className="mt-2">Description</label>
        <textarea
          onChange={handleDescription}
          value={description}
          className="form-control mt-2"
          placeholder="Enter a task..."
          rows={4}
        ></textarea>
        <button className="btn btn-lg btn-danger mt-3">Create</button>
      </form>
    </div>
  );
};

export default TaskCreate;
