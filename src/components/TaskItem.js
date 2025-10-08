import React from "react";

export default function TaskItem({ task, onToggle, onEdit, onDelete }) {
  return (
    <div className="task-row" role="listitem" aria-label={`Task ${task.title}`}>
      <div className="task-meta">
        <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} aria-label={`Mark ${task.title} completed`} />
        <div>
          <div style={{ fontWeight: 600, textDecoration: task.completed ? "line-through" : "none" }}>{task.title}</div>
          {task.description && <div className="small">{task.description}</div>}
        </div>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <div className="small">{new Date(task.createdAt).toLocaleDateString()}</div>
        <button className="button secondary" onClick={() => onEdit(task)}>Edit</button>
        <button className="button" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}
