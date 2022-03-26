import React from "react";
import "./button.css";
export function Button(props) {
  return (
    <div>
      <button className="btn" onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
}
