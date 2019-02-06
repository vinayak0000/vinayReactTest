import React from "react";
import axios from "axios";

import "./Claim.css";

class Claim extends React.Component {
  state = {
    claimData: [],
    selectVal: "all"
  };
  componentDidMount() {
    axios
      .get("/claimDetails.json")
      .then(json => this.setState({ claimData: json.data }))
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = event => {
    this.setState({ selectVal: event.target.value });
    // console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Claim Details</h4>
              <div>
                <select
                  class="form-control"
                  defaultValue={this.state.selectVal}
                  onChange={this.handleChange}
                >
                  <option value="all">All</option>
                  {this.state.claimData.map((object, index) => (
                    <option value={object.claimId}>{object.claimId} </option>
                  ))}
                </select>
              </div>
              <div className="table-responsive">
                <table
                  id="mytable"
                  className="table table-bordred table-striped"
                >
                  <thead>
                    <th>Claim Id</th>
                    <th>User Id</th>
                    <th>Claim Name </th>

                    <th>Claim Amount </th>
                    <th>Claim Submitted Date </th>
                    <th>Hospital Name </th>

                    <th>Claim Status </th>
                  </thead>
                  <tbody>
                    {this.state.claimData
                      .filter(
                        object =>
                          object.claimId == this.state.selectVal ||
                          this.state.selectVal == "all"
                      )
                      .map((object, index) => {
                        // console.log( object.claimId + " " + this.state.selectVal);

                        return (
                          <tr>
                            <td>{object.claimId}</td>
                            <td>{object.userId}</td>
                            <td>{object.claimName}</td>
                            <td>{object.claimAmount}</td>
                            <td>{object.claimSubmittedDate}</td>
                            <td>{object.hospitalName}</td>
                            <td>{object.claimStatus}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>

                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Claim;
