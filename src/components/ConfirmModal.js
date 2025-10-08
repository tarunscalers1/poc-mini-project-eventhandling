import React from "react";

export default function ConfirmModal({ title="Confirm", message="", onCancel, onConfirm }) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal card" role="document">
        <h3 id="modal-title">{title}</h3>
        <p className="small" style={{ marginTop: 8 }}>{message}</p>
        <div style={{ display: "flex", gap: 8, marginTop: 12, justifyContent: "flex-end" }}>
          <button className="button secondary" onClick={onCancel}>Cancel</button>
          <button className="button" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}
