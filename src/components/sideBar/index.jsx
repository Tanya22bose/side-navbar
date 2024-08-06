import { useState } from "react";
import "./styles.css";

const SideBar = ({ data }) => {
  return (
    <div className="side-bar">
      {data.map((item) => (
        <Folder item={item} key={item.id} />
      ))}
    </div>
  );
};

const Folder = ({ item }) => {
  const [toggle, setToggle] = useState(false);
  const isFile = item.structure === "File";

  if (isFile)
    return (
      <div className="file">
        <div>{item.name}</div>
      </div>
    );

  return (
    <div className="folder">
      <div onClick={() => setToggle((val) => !val)} style={{ fontWeight: 700 }}>
        {item.name}
      </div>
      {toggle && (
        <div style={{ marginLeft: "10px" }}>
          {item.files?.map((item) => (
            <div>
              <Folder item={item} key={item.id} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBar;
