import React, { useState, useEffect } from "react";

export default function TaskForm({ onSave, onCancel, initial }) {
  const [title, setTitle] = useState(initial?.title || "");
  const [description, setDescription] = useState(initial?.description || "");
  const [error, setError] = useState("");

  useEffect(() => {
    setTitle(initial?.title || "");
    setDescription(initial?.description || "");
  }, [initial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    setError("");
    onSave({ id: initial?.id, title: title.trim(), description: description.trim(), completed: initial?.completed || false });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="card" aria-label="Task form">
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label>
          <div className="small">Title</div>
          <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          <div className="small">Description</div>
          <textarea className="input" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit" className="button">Save</button>
          {onCancel && <button type="button" onClick={onCancel} className="button secondary">Cancel</button>}
        </div>
      </div>
    </form>
  );
}
