import React from "react";
import "./input.css";

export function Input(props) {
  if (props.type === "text")
    return (
      <div className="input_item">
        <input
          class="input"
          type="text"
          name="text"
          id="inputName"
          placeholder={props.placeholder}
          value={onchange}
          autoFocus
        />
      </div>
    );
  return (
    <div className="input_item">
      <textarea
        class="input"
        type="text"
        name="text"
        id="inputName"
        placeholder={props.placeholder}
        value={onchange}
        autoFocus
      />
    </div>
  );
}
