import React from "react";
import axios from "axios";

import "./InsPayer.css";

class InsPayer extends React.Component {
  state = {
    claimData: [],
    selectVal: "all"
  };
  componentDidMount() {
    axios
      .get("/insPayerDetails.json")
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
        {/*<Suspense fallback={<div>Loading...</div>}>
         */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Insurance Payer Details</h4>
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
                    <th>Payer Name</th>
                    <th>Claim Id</th>
                    <th>Claim Amount Submitted</th>
                    <th>Claim Amount Approved </th>
                    <th>Claim Approval Status </th>
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
                            <td>{object.payerName}</td>
                            <td>{object.claimId}</td>
                            <td>{object.claimAmountSubmitted}</td>
                            <td>{object.claimAmountApproved}</td>
                            <td>{object.claimApprovalStatus}</td>
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
        {/*</Suspense>*/}
      </div>
    );
  }
}

export default InsPayer;
