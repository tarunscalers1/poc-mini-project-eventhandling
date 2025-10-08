import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="input search"
      placeholder="Search tasks..."
      aria-label="Search tasks"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
