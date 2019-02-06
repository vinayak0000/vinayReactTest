import React from "react";
import axios from "axios";
import "./User.css";

class Add extends React.Component {
  state = {
    userId: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    address: "",
    userData: []
  };

  componentWillMount() {
    axios
      .get("/userDetails.json")
      .then(json => json.data)
      .then(json => {
        this.setState({ userData: json });
        let userData = this.state.userData;

        Object.keys(sessionStorage).map((Object, Index) => {
          // console.log(sessionStorage.getItem(Object));
          let obj = JSON.parse(sessionStorage.getItem(Object));
          userData.push(obj);
          this.setState({ userData: userData });
        });
      })

      .catch(error => {
        console.log(error);
      });
  }

  handleChange = e => {
    const pattern = /^[0-9\b]+$/;
    const pattern2 = /^[a-zA-Z\b]+$/;
    //console.log(e.target.name);
    if (e.target.name === "age" || e.target.name === "userId") {
      if (e.target.value === "" || pattern.test(e.target.value)) {
        this.setState({ [e.target.name]: e.target.value });
      }
    } else if (e.target.name === "firstName" || e.target.name === "lastName") {
      if (e.target.value === "" || pattern2.test(e.target.value)) {
        this.setState({ [e.target.name]: e.target.value });
      }
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handlerClick = (e, id) => {
    let sesKey = this.state.userData.find(function(element) {
      return element.userId === id || element.userId === Number(id);
    });

    if (sesKey == undefined) {
      sessionStorage.setItem(this.state.userId, JSON.stringify(this.state));
    } else {
      alert("User Id is already exist,Change it.");
      e.preventDefault();
    }
  };

  render() {
    return (
      <div>
        <div className="containers">
          <div>
            <h3> User Creation </h3>
          </div>
          <form
            action="#"
            onSubmit={e => this.handlerClick(e, this.state.userId)}
          >
            <div className="field">
              <input
                required
                type="text"
                placeholder="User Id"
                name="userId"
                pattern="[0-9\b]{1-2}"
                onChange={this.handleChange}
                value={this.state.userId || ""}
                title="User Id should be in number format"
              />
            </div>
            <div className="field">
              <input
                required
                type="text"
                placeholder="First name"
                name="firstName"
                onChange={this.handleChange}
                value={this.state.firstName || ""}
              />
            </div>
            <div className="field">
              <input
                required
                type="text"
                onChange={this.handleChange}
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName || ""}
              />
            </div>
            <div className="field">
              <input
                required
                type="text"
                pattern="[0-9\b]{1-2}"
                onChange={this.handleChange}
                placeholder="Age"
                name="age"
                value={this.state.age || ""}
              />
            </div>
            <div className="field">
              <select
                name="gender"
                onChange={this.handleChange}
                defaultValue=""
              >
                <option disabled value="">
                  Select Gender
                </option>
                <option value="Male">Male </option>
                <option value="Female">Female </option>
              </select>
            </div>
            <div className="field">
              <textarea
                required
                type="text"
                onChange={this.handleChange}
                placeholder="Address"
                name="address"
                value={this.state.address || ""}
              />
            </div>
            <button className="ui button">Create</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Add;
