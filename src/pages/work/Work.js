import React from "react";
import "./Work.css";

function Work() {
  return (
    <div class="d-flex flex-column" id="work-id">
      <div class="p-2">
        <iframe
          src="https://jpmare29.github.io/project-1-group-8-columbia/"
          style={{ width: "200%", height: "47rem" }}
        ></iframe>
      </div>
      <br></br>
      <div class="p-2">
        <iframe
          src="https://moekabba.github.io/weather-dasboard/"
          style={{ width: "200%", height: "45rem" }}
        ></iframe>
      </div>
      <br></br>

      <div class="p-2">
        <iframe
          src="https://moekabba.github.io/portfolio-generator/"
          style={{ width: "200%", height: "45rem" }}
        ></iframe>
      </div>
      <br></br>

      <div>
        <iframe
          src=" https://moekabba.github.io/code-quiz/"
          style={{ width: "100%", height: "45rem" }}
        ></iframe>
      </div>
    </div>
  );
}

export default Work;
