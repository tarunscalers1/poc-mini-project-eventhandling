import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, loading, onToggle, onEdit, onDelete }) {
  if (loading) {
    return <div className="card empty"><div className="spinner" aria-hidden="true"></div> Loading...</div>;
  }

  if (tasks.length === 0) {
    return <div className="card empty">No tasks yet — add your first task!</div>;
  }

  return (
    <div className="card" role="list" aria-label="Task list">
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} onToggle={onToggle} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
