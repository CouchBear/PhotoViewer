import React from "react";  // import React (to provide access to TSX)
import "./PhotoViewer.css";
function PhotoViewer(props: { src: string; }) {    // declare and export new function called 'PhotoViewer'
  return (
    <div id="div-main">

      <img src={props.src} className="displayPhoto" />

    </div>
  );
}

export { PhotoViewer };