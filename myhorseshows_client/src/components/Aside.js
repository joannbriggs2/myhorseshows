import React from "react";
import Form from "./Form.js";

function Aside(props) {
  return (
    <aside>
      <img
        src="
        https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/44987019_2387755691241628_7775281318601949184_n.jpg?_nc_cat=105&_nc_ohc=2imO5G-f_pAAQkgi7LU0woCRNbzFfCG9Deb5oFQHiLEnfXwQzOL6FIMFw&_nc_ht=scontent-lga3-1.xx&oh=059e34ff5f0c81f5fb249b7c8efad000&oe=5EB3BA24"
        alt="horse"
      ></img>

      <h1>Add Horse Shows</h1>
      <Form handleSubmit={props.handleSubmit} />
    </aside>
  );
}

export default Aside;
