import React from "react";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1><span><a className="white" id="jumboHead" href="/">(React) Google Books Search</a></span></h1>
        <div>
          <a className="white" target="_blank" rel="noopener noreferrer">
            Search for and Save Books of Interest
          </a>
        </div>
      
    </div>
  );
}

export default Jumbotron;