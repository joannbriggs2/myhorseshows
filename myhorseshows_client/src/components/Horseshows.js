import React from "react";
import Horseshow from "./Horseshow.js";

function Horseshows(props) {
  const { horseshows, handleDelete, handleUpdate } = props;
  return (
    <div>
      {horseshows.map(horseshow => (
        <Horseshow
          key={horseshow.id}
          horseshow={horseshow}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default Horseshows;
