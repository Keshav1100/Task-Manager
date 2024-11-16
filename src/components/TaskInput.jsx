import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleAddTask = () => {
    if (taskTitle.trim() !== "") {
      addTask({
        id: Date.now(),
        title: taskTitle,
        completed: false,
        priority,
      });
      setTaskTitle("");
      setPriority("Low");
    }
  };

  return (
    <div className="task-input">
      <h2>Add a new task:</h2>
      <div className="task-input-section">
        <input
          type="text"
          placeholder="Enter task title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskInput;
