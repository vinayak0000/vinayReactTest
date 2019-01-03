import React from "react";

export class View extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h4>Bootstrap Snipp for Datatable</h4>
            <div class="table-responsive">
              <table id="mytable" class="table table-bordred table-striped">
                <thead>
                  <th>
                    <input type="checkbox" id="checkall" />
                  </th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Edit</th>

                  <th>Delete</th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" class="checkthis" />
                    </td>
                    <td>Mohsin</td>
                    <td>Irshad</td>
                    <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
                    <td>isometric.mohsin@gmail.com</td>
                    <td>+923335586757</td>
                    <td>
                      <p
                        data-placement="top"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        <button
                          class="btn btn-primary btn-xs"
                          data-title="Edit"
                          data-toggle="modal"
                          data-target="#edit"
                        >
                          <span class="glyphicon glyphicon-pencil" />
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
                          class="btn btn-danger btn-xs"
                          data-title="Delete"
                          data-toggle="modal"
                          data-target="#delete"
                        >
                          <span class="glyphicon glyphicon-trash" />
                        </button>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="clearfix" />
              <ul class="pagination pull-right">
                <li class="disabled">
                  <a href="#">
                    <span class="glyphicon glyphicon-chevron-left" />
                  </a>
                </li>
                <li class="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#">
                    <span class="glyphicon glyphicon-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
