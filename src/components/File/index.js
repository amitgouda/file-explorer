import React from "react";
import "./index.css";
function File({ name = "" }) {
  return (
    <div className="file-container">
      File- <span>{name}</span>{" "}
    </div>
  );
}

export default File;
