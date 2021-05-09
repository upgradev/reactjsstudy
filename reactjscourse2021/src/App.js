import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Task from "./components/Task";


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 3:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Doctors ",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks onDelete={deleteTask} onToggle={toggleReminder} tasks={tasks} />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
}

export default App;
