import React, { useState } from "react";

import "./index.css";
import File from "../File";

function Folder({ name = "", items = [], isRoot = false }) {
  const [folderData, setFolderData] = useState({ name, items });

  const handleOnCreate = (isFolder = false) => {
    const clonedFolderdata = JSON.parse(JSON.stringify(folderData));

    const entity = {
      id: 1,
      name: "sample name",
      isFolder,
      items: [],
    };

    clonedFolderdata.items.push(entity);

    setFolderData(clonedFolderdata);
  };

  return (
    <div className={`folder-container${isRoot ? "-root" : ""}`}>
      <span>Folder Name - </span>
      {name} <button onClick={() => handleOnCreate(true)}> + Folder </button>
      <button onClick={() => handleOnCreate(false)}> + File </button>
      {folderData.items.map((childItem) =>
        childItem.isFolder ? (
          <Folder
            key={childItem.id}
            name={childItem.name}
            items={childItem.items}
          />
        ) : (
          <File key={childItem.id} name={childItem.name} />
        )
      )}
    </div>
  );
}

export default Folder;
