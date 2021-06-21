import React from "react";

//I need this to display the current state thats being set in home.js
//but, watchlist.js isnt a child component to home.js so it cant use props for home.
const watchlist = () => {
  return (
    <div>
      <p>Stock being watched: APPLE</p>
      <p>Stock being watched: TESLA</p>
      <p>Stock being watched: PEPSI</p>
      <p>Stock being watched: MICROSOFT</p>
    </div>
  );
};

export default watchlist;
