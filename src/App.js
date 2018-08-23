import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todo-list";

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Todolist list={this.props.handleSubmit} />
      </div>
    );
  }
}

export default App;
