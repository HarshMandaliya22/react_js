import React from 'react';
import { Link } from 'react-router-dom';
import AdminSideMenu from "./AdminSideMenu";

export default function AdminChef() {
  return (
    <div>
      <div className="container-xxl position-relative bg-white d-flex p-0">
        {/* Sidebar Start */}
        <AdminSideMenu />
      </div>
      {/* Sidebar End */}
      {/* Content Start */}
      <div className="content">
        {/* Navbar Start */}
        <nav className="navbar navbar-expand bg-dark navbar-light sticky-top px-4 py-0">
          <Link to="#" className="sidebar-toggler flex-shrink-0">
            <i className="fa fa-bars" />
          </Link>
          <div className="navbar-nav align-items-center ms-auto">
            <div className="nav-item dropdown">
              <Link to="#" className="nav-link">
                <img className="rounded-circle me-lg-2" src="admin/img/user.jpg" alt="" style={{ "width": "40px", "height": "40px" }} />
                <span className="d-none d-lg-inline-flex">John Doe</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              </div>
            </div>
          </div>
        </nav>
        {/* Navbar End */}
        <div className="container-fluid">
          <div className="card shadow mt-3">
            <div className="card-header bg-dark d-flex justify-content-between">
              <h3 className="card-title fw-semibold text-white mt-2">Chef</h3>
              <Link to="/add-chef" className="btn btn-light mt-2">Add Chef</Link>
            </div>
            <div className="card-body">
              {/* <h5 class="mb-2 border-bottom pb-2">Chef</h5> */}
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Photo</th>
                    <th>Expertization</th>
                    <th>Experience</th>
                    <th>City</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Ramukaka</td>
                    <td><img src="https://picsum.photos/100?random=1" className="img-fluid" alt="" /></td>
                    <td>Kathiyavadi</td>
                    <td>15 years</td>
                    <td>Bhavnagar</td>
                    <td>abc@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Footer Start */}
        {/* Footer End */}
      </div>
    </div>
  );
}