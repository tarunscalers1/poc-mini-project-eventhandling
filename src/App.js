import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import ConfirmModal from "./components/ConfirmModal";
import Toast from "./components/Toast";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [toast, setToast] = useState("");

  const filteredTasks = tasks.filter(t => t.title.toLowerCase().includes(search.toLowerCase()));

  const addOrUpdateTask = (task) => {
    if (task.id) {
      setTasks(prev => prev.map(t => t.id === task.id ? {...t, ...task} : t));
      setToast("Task updated!");
    } else {
      setTasks(prev => [...prev, { ...task, id: Date.now(), createdAt: new Date().toISOString() }]);
      setToast("Task added!");
    }
    setEditing(null);
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? {...t, completed: !t.completed} : t));
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const deleteTask = () => {
    setTasks(prev => prev.filter(t => t.id !== deleteId));
    setShowModal(false);
    setToast("Task deleted!");
  };

  return (
    <div className="app">
      <div className="header">
        <h1 className="h1">Event Handling Tasks</h1>
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <TaskForm onSave={addOrUpdateTask} onCancel={() => setEditing(null)} initial={editing} />
      <TaskList tasks={filteredTasks} loading={false} onToggle={toggleTask} onEdit={setEditing} onDelete={confirmDelete} />

      {showModal && <ConfirmModal
        title="Delete Task"
        message="Are you sure you want to delete this task?"
        onCancel={() => setShowModal(false)}
        onConfirm={deleteTask}
      />}

      <Toast message={toast} onClose={() => setToast("")} />
    </div>
  );
}
