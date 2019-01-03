import React from "react";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";

const fs = require("fs");

class Add extends React.Component {
  state = {
    userId: null,
    firstName: "",
    lastName: "",
    age: null,
    gender: "",
    address: ""
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  sendDataSomewhere = function jsonfile(file) {
    let student = {
      userId: 1,
      firstName: "vinay",
      lastName: "test",
      age: 22,
      gender: "male",
      address: "chennai"
    };

    //  axios.post("/userDetails.json", { student }).then(res => {
    //    console.log(res);
    //    console.log(res.data);
    // });
    var fs = require("fs");
    var sampleObject = {
      a: 1,
      b: 2,
      c: {
        x: 11,
        y: 22
      }
    };

    fs.writeFile(
      "./userDetails.json",
      JSON.stringify(sampleObject, null, 4),
      err => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File has been created");
      }
    );
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.sendDataSomewhere}>
          <Form.Field>
            <label> UserId </label>
            <Form.Input
              name="userId"
              value={this.state.userId}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label> Name </label>
            <Form.Input
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Add;
