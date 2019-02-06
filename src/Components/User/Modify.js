import React from "react";
import axios from "axios";
import ErrorHandle from "./Error.js";
//import { View } from "./viewRecord.js";

class Modify extends React.Component {
  state = {
    userId: null,
    firstName: "",
    lastName: "",
    age: null,
    gender: "",
    address: "",
    userData: [],
    editVisible: "none",
    viewVisible: "block"
  };

  componentWillMount() {
    axios
      .get("/userDetails.json")
      .then(json => json.data)
      .then(json => {
        this.setState({ userData: json });
        let userData = this.state.userData;
        console.log(
          Object.keys(sessionStorage).find(function(element) {
            return element === "d";
          })
        );
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

  deleteRecord = id => {
    var index = this.state.userData.findIndex(e => e.userId === id);
    if (index == -1) {
      throw new Error("Wrong Index");
    }
    var newArray = this.state.userData;

    let sesKey = Object.keys(sessionStorage).find(function(element) {
      return element === id;
    });
    if (sesKey == undefined) {
      //newArray.splice(index, 1);
      //this.setState({ userData: newArray });
      alert("Data saved in file cannot be deleted");
    } else {
      newArray.splice(index, 1);
      this.setState({ userData: newArray });
      //  sessionStorage.removeItem(id);
    }
  };

  viewEdit = (e, show, show1, userId) => {
    let sesKey = Object.keys(sessionStorage).find(function(element) {
      return element === userId;
    });
    if (sesKey == undefined) {
      alert("Data saved in file cannot be edited");
    } else {
      this.setState({ editVisible: show, viewVisible: show1, userId: userId });
    }
  };

  viewClose = (e, show, show1, userId) => {
    this.setState({ editVisible: show, viewVisible: show1, userId: userId });
  };

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
    sessionStorage.setItem(this.state.userId, JSON.stringify(this.state));
  };

  render() {
    return (
      <ErrorHandle>
        <div>
          <div
            className="container"
            style={{
              display: this.state.viewVisible
            }}
          >
            <div className="row">
              <div className="col-md-12">
                <h4>User Details</h4>
                <div className="table-responsive">
                  <table
                    id="mytable"
                    className="table table-bordred table-striped"
                  >
                    <thead>
                      <th>User Id</th>
                      <th>First Name</th>
                      <th>Last Name</th>

                      <th>Age</th>
                      <th>Gender</th>
                      <th>Address</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </thead>
                    <tbody>
                      {this.state.userData.map((object, index) => (
                        <tr>
                          <td>{object.userId}</td>
                          <td>{object.firstName}</td>
                          <td>{object.lastName}</td>
                          <td>{object.age}</td>
                          <td>{object.gender}</td>
                          <td>{object.address}</td>
                          <td>
                            <p
                              data-placement="top"
                              data-toggle="tooltip"
                              title="Edit"
                            >
                              <button
                                className="btn btn-primary btn-xs"
                                data-title="Edit"
                                data-toggle="modal"
                                id={object.userId}
                                data-target="#basicExampleModal"
                                onClick={e =>
                                  this.viewEdit(
                                    e,
                                    "block",
                                    "none",
                                    object.userId
                                  )
                                }
                              >
                                <span className="glyphicon glyphicon-edit" />
                              </button>
                            </p>
                          </td>
                          <td>
                            <p
                              data-placement="top"
                              data-toggle="tooltip"
                              title="Delete"
                            >
                              <button
                                onClick={() => this.deleteRecord(object.userId)}
                                //  onClick={this.deleteRecord}
                                className="delete btn btn-danger btn-xs"
                                data-title="Delete"
                                data-toggle="modal"
                                data-target="#delete"
                                id={object.userId}
                                name="del"
                              >
                                <span className="glyphicon glyphicon-trash" />
                              </button>
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal-container"
            id="basicExampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{
              display: this.state.editVisible
            }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Edit Details
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={e => this.viewClose(e, "none", "block")}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-body-containers">
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
                          disabled
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
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={e => this.viewClose(e, "none", "block")}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ErrorHandle>
    );
  }
}

export default Modify;
