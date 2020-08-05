import React from "react";
import "../styles/Preloader.css";

const Preloader = () => {
  return (
    <section id="preloader">
      <h4 className="pre-text">
        <ul className="texts">
          <li>Oh, hey, uhm... Give me a few seconds...</li>
          <li>Let's see, where did I put that again...</li>
          <li>Now let's put this together right here...</li>
          <li>Plug it into that there...</li>
          <li>Would help if I used the right adapter...</li>
          <li>Maybe the wifi's the problem? Guess so...</li>
        </ul>
      </h4>
      <div className="progress" />
    </section>
  );
};

export default Preloader;
