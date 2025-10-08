import React, { useEffect } from "react";

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 2500);
    return () => clearTimeout(t);
  }, [onClose]);

  if (!message) return null;
  return <div className="toast" role="status" aria-live="polite">{message}</div>;
}
