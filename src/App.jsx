import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import About from "./pages/About";
import "./App.css";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("priority");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const handleSortChange = (e) => setSortOption(e.target.value);

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "priority") {
        const priorities = { High: 3, Medium: 2, Low: 1 };
        return priorities[b.priority] - priorities[a.priority];
      }
      if (sortOption === "completed") {
        return a.completed - b.completed;
      }
      return b.id - a.id;
    });

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About Me</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="heading">Task Manager</h1>
                <div className="main-input-section">
                  <div className="new-entry-section">
                    <TaskInput addTask={addTask} />
                  </div>
                  <div className="search-section">
                    <h2>Search your tasks:</h2>
                    <div className="search-section-main">
                      <input
                        type="text"
                        placeholder="Search tasks"
                        value={searchQuery}
                        onChange={handleSearch}
                      />
                      <select onChange={handleSortChange} value={sortOption}>
                        <option value="date">Date</option>
                        <option value="priority">Priority</option>
                        <option value="completed">Completion Status</option>
                      </select>
                    </div>
                  </div>
                </div>
                <TaskList
                  tasks={filteredTasks}
                  deleteTask={deleteTask}
                  toggleComplete={toggleComplete}
                />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
