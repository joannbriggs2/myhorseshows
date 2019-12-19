import React from "react";
import Form from "./Form.js";

import Button from "react-bootstrap/Button";

class Horseshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
    this.toggleForm = this.toggleForm.bind(this);
  }
  toggleForm() {
    console.log("triggered");
    this.setState({ formVisible: !this.state.formVisible });
  }

  render() {
    const { horseshow, handleDelete, handleUpdate } = this.props;
    return (
      <>
        {this.state.formVisible ? (
          <Form
            horseshow={horseshow}
            handleSubmit={handleUpdate}
            toggleForm={this.toggleForm}
          ></Form>
        ) : (
          <div className="horseshow">
            <h1>{horseshow.venue}</h1>
            <p>{horseshow.eventtype}</p>
            <p>{horseshow.date}</p>
            <p>{horseshow.time}</p>
            <small>
              <a
                href={horseshow.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </small>

            <p></p>
            <Button variant="danger" onClick={() => handleDelete(horseshow)}>
              Delete
            </Button>
            <Button variant="info" onClick={this.toggleForm}>
              Edit this Show
            </Button>
          </div>
        )}
      </>
    );
  }
}
export default Horseshow;
