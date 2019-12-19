import React from "react";
import Form from "./Form.js";
import Carousel from "react-bootstrap/Carousel";

function Aside(props) {
  return (
    <aside>
      {/* <img
        src="
        https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/44987019_2387755691241628_7775281318601949184_n.jpg?_nc_cat=105&_nc_ohc=2imO5G-f_pAAQkgi7LU0woCRNbzFfCG9Deb5oFQHiLEnfXwQzOL6FIMFw&_nc_ht=scontent-lga3-1.xx&oh=059e34ff5f0c81f5fb249b7c8efad000&oe=5EB3BA24"
        alt="horse"
      ></img> */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="
      https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/44987019_2387755691241628_7775281318601949184_n.jpg?_nc_cat=105&_nc_ohc=2imO5G-f_pAAQkgi7LU0woCRNbzFfCG9Deb5oFQHiLEnfXwQzOL6FIMFw&_nc_ht=scontent-lga3-1.xx&oh=059e34ff5f0c81f5fb249b7c8efad000&oe=5EB3BA24"
            alt="horse"
          ></img>
          <Carousel.Caption>
            <h3>MBLA Hunter Pace 2019</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/39067685_2276509005699631_5600146778524483584_n.jpg?_nc_cat=101&_nc_ohc=9wUz_8BObyEAQkN9nPeUAwn9nsVexDPQzIdnUBF75Z1iDoD-pV2hziRHA&_nc_ht=scontent-lga3-1.xx&oh=19f5d4b5f350478cdf63e0717da28a54&oe=5E7DCA4D"
            alt="horse"
          ></img>
          <Carousel.Caption>
            <h3>Frazier Farm Combined Test 2019</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/64364314_2752368104780383_7522081460220592128_o.jpg?_nc_cat=103&_nc_ohc=465iYXFKAMEAQkoKjL8MoscpT0io1wFE8Ef2iUgGDgy1dwuTEZUnVwrAg&_nc_ht=scontent-lga3-1.xx&oh=283c86370ffa1d5d99441509ed94327b&oe=5E665292"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Frazier Farm Horse Trails Fall 2019</h3>
            <p>Stadium</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/64310941_2752368801446980_3652029413551243264_o.jpg?_nc_cat=109&_nc_ohc=v8dhYm-bOVQAQnODGzFsZgini98EpL3o_FCj7bc80w0arYjYxHbGDKL2Q&_nc_ht=scontent-lga3-1.xx&oh=f6e1ef5b8aec184084eaec20f6404be9&oe=5E74127F"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Frazier Farm Horse Trails Fall 2019</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/66517511_2819670458050147_6020577815710138368_n.jpg?_nc_cat=111&_nc_ohc=b3u25tUqrGkAQkWIse2TzTCTTtGjBuXCTESCBh0df1WC4tCWfuqOoaYZA&_nc_ht=scontent-lga3-1.xx&oh=7457505729c8860ecd1244dd19cd2bde&oe=5EA7DBAC"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Treasure Hill Combined Test June 2019</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1>Add Horse Shows</h1>
      <Form handleSubmit={props.handleSubmit} />
    </aside>
  );
}

export default Aside;
