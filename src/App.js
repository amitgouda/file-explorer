import "./App.css";
import React from "react";
import Folder from "./components/Folder";
import { EXPLORER } from "./constants";

function App() {
  return (
    <div className="App">
      <Folder name={EXPLORER.name} items={[]} isRoot={true} />
    </div>
  );
}

export default App;
