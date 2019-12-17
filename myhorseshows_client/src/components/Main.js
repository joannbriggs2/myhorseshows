import React from "react";
import Horseshows from "./Horseshows";

function Main(props) {
  const { horseshows, handleDelete, handleUpdate } = props;
  return (
    <main>
      <Horseshows
        horseshows={horseshows}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </main>
  );
}

export default Main;
