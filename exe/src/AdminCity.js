import React from 'react';
import { Link } from 'react-router-dom';
import AdminSideMenu from "./AdminSideMenu";

export default function AdminCity() {
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
              <h3 className="card-title fw-semibold text-white mt-2">City</h3>
              <Link to="/add-city" className="btn btn-light mt-2">Add City</Link>
            </div>
            <div className="card-body">
              <div className="col-md-4">
                <div className="card shadow">
                  <div className="card-header">
                    <h4 className="card-title text-center">Bhavnagar</h4>
                  </div>
                  <div className="card-body">
                    <img src="https://picsum.photos/300?random=1" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}