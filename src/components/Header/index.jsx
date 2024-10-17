import React from "react";
import { analytics } from "../../App";

const Header = () => {
  return (
    <div className="header">
      <button onClick={() => analytics.track("hello world")}>Track</button>
      <p>Discover amazing features below!</p>
    </div>
  );
};

export default Header;
