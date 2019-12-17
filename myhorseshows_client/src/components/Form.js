import React from "react";
import Input from "./Input.js";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      venue: "",
      eventtype: "",
      website: "",
      date: "",
      time: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    if (this.props.horseshow) {
      this.setState({
        venue: this.props.horseshow.venue || "",
        eventtype: this.props.horseshow.eventtype || "",
        website: this.props.horseshow.website || "",
        date: this.props.horseshow.date || "",
        time: this.props.horseshow.time || ""
      });
    }
  }
  handleChange(event) {
    console.log("changed event", event.target.id, event.target.value);
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.props.horseshow) {
      this.props.handleSubmit(event, {
        venue: this.state.venue,
        eventtype: this.state.eventtype,
        website: this.state.website,
        date: this.state.date,
        time: this.state.time,
        id: this.props.horseshow.id
      });
      this.props.toggleForm();
    } else {
      this.props.handleSubmit(event, {
        venue: this.state.venue,
        eventtype: this.state.eventtype,
        website: this.state.website,
        date: this.state.date,
        time: this.state.time
      });
    }
    this.setState({
      venue: "",
      eventtype: "",
      website: "",
      date: "",
      time: ""
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={"venue"}
          placeholder={"Venue"}
          type={"text"}
          value={this.state.venue}
          id={"venue"}
        />
        <Input
          handleChange={this.handleChange}
          name={"website"}
          placeholder={"Website"}
          type={"text"}
          value={this.state.website}
          id={"website"}
        />
        <Input
          handleChange={this.handleChange}
          name={"eventtype"}
          placeholder={"Type of Event"}
          type={"text"}
          value={this.state.eventtype}
          id={"eventtype"}
        />
        <Input
          handleChange={this.handleChange}
          name={"date"}
          placeholder={"Show date"}
          type={"text"}
          value={this.state.date}
          id={"date"}
        />
        <Input
          handleChange={this.handleChange}
          name={"time"}
          placeholder={"Start time"}
          type={"text"}
          value={this.state.time}
          id={"time"}
        />

        <input
          type="submit"
          value={
            this.props.horseshow ? "update this horseshow" : "add a horseshow"
          }
        />
      </form>
    );
  }
}

export default Form;
