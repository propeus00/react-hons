import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl
} from "react-bootstrap";
import Axios from "../../axios";

export class AddProject extends Component {
  state = {
    name: "",
    description: "",
    userName: ""
  };
  handleSubmit = async event => {
    event.preventDefault();
    console.log("helloooooooooooo");
    const data = new FormData(event.target);
    console.log(data.get("Name"));

    await Axios.post(
      "/Projects",
      {
        Name: data.get("Name"),
        Description: data.get("Description"),
        UserName: data.get("UserName")
      },
      { "Content-Type": "application/json" }
    ).then(resp => {
      this.myFormRef.reset();
      console.log("Response: ", resp);
    });
  };
  onChange = e => {
    console.log(e.target.name + " : " + e.target.value);
  };

  

  render() {
    return (
      <>
        <Form  ref={(el) => this.myFormRef = el} onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Project name</Form.Label>
            <Form.Control
              required
              type="text"
              name="Name"
              //value={this.state.name}
              placeholder="Enter project name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              type="text"
              name="Description"
              //value=""
              placeholder="Enter description"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              name="UserName"
              //value=""
              placeholder="Enter username"
            />
            <div class="text-left text-muted"><small>Example James</small></div>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
