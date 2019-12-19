import React from "react";
import Aside from "./components/Aside.js";
// import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Nav from "./components/Nav.js";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const BASE_URL = "https://jabhorseshows.herokuapp.com";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horseshows: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  async handleAdd(event, formInputs) {
    event.preventDefault();
    await axios.post(`${BASE_URL}/horseshows`, formInputs);
    this.getHorseshows();
  }
  componentDidMount() {
    this.getHorseshows();
  }
  async getHorseshows() {
    const response = await axios(`${BASE_URL}/horseshows`);
    const data = response.data;
    this.setState({
      horseshows: data.reverse()
    });
  }
  async handleDelete(deletedHorseshow) {
    await axios.delete(`${BASE_URL}/horseshows/${deletedHorseshow.id}`);
    this.getHorseshows();
  }

  async handleUpdate(event, formInputs) {
    event.preventDefault();
    console.log("updating");
    await axios.put(`${BASE_URL}/horseshows/${formInputs.id}`, formInputs);
    this.getHorseshows();
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <Header />
          <Aside handleSubmit={this.handleAdd} />
          <Main
            horseshows={this.state.horseshows}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
          <Nav />
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default App;
