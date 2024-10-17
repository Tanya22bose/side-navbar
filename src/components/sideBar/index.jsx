import React from "react";
import { analytics } from "../../App";

const Features = () => {
  return (
    <div className="features">
      <h2>Key Features</h2>
      <ul>
        <button
          onClick={() =>
            analytics.identify("clicked feature", {
              name: "Feature 1",
            })
          }
        >
          Feature 1
        </button>
        <button
          onClick={() =>
            analytics.identify("clicked feature", {
              name: "Feature 2",
            })
          }
        >
          Feature 2
        </button>
        <button
          onClick={() =>
            analytics.identify("clicked feature", {
              name: "Feature 3",
            })
          }
        >
          Feature 3
        </button>
      </ul>
    </div>
  );
};

export default Features;
