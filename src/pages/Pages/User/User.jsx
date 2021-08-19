import React, {useEffect, Component } from "react";
import ModuleDataTable from '../../../js/ModuleDataTable';


  

const User = () => {

    useEffect(() => {        
        ModuleDataTable()
    }, [])
  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Users</h1>
        </div>
        <div className="row"></div>
        <div className="section-body">
          <h2 class="section-title">Users</h2>
          <div className="table-responsive">
            <table className="table table-striped" id="table-1">
              <thead>
                <tr>
                  <th className="text-center">#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th className="text-center">Status</th>
                  <th width="200px">CreatedOn</th>
                  <th>Videos</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">1</td>
                  <td className="text-center">
                    <img
                      alt="image"
                      src=""
                      className="rounded-circle"
                      height={50}
                      width={50}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-left">
                    <label
                      className="custom-switch mt-2"
                      style={{ padding: 0 }}
                    >
                      <span style={{ visibility: "hidden" }}></span>
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      ></input>

                      <span className="custom-switch-indicator" />
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <a
                      className="btn btn-sm btn-outline-primary"
                      href=""
                    >
                      View
                    </a>
                  </td>
                  <td style={{ width: "150px" }}>
                    <a href="/user/" className>
                      <i className="fas fa-eye" />
                    </a>
                    &nbsp;
                    <i
                      className="fas fa-trash"
                      style={{ color: "red", cursor: "pointer" }}
                      onclick="handleDeleteUser('<%= user.id %>')"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default User;
