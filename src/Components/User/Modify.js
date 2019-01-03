import React from "react";
import axios from "axios";
//import { View } from "./viewRecord.js";

class Modify extends React.Component {
  state = {
    userData: []
  };
  componentDidMount() {
    axios
      .get("/userDetails.json")
      .then(json => this.setState({ userData: json.data }));
  }

  deleteRecord = id => {
    console.log(id);
    var index = this.state.userData.findIndex(e => e.userId == id);
    console.log(index);
    var newArray = this.state.userData.slice();
    newArray.splice(index, 1);
    this.setState({ userData: newArray });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>User Details</h4>
            <div className="table-responsive">
              <table id="mytable" className="table table-bordred table-striped">
                <thead>
                  <th>User Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>

                  <th>Age</th>
                  <th>Gender</th>
                  <th>Address</th>

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
                          title="Delete"
                        >
                          <button
                            onClick={() => this.deleteRecord(object.userId)}
                            //  onClick={this.deleteRecord}
                            className="btn btn-danger btn-xs"
                            data-title="Delete"
                            data-toggle="modal"
                            data-target="#delete"
                            id={object.userId}
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
    );
  }
}

export default Modify;
