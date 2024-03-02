import React from 'react';
import { Link } from 'react-router-dom';
import AdminSideMenu from "./AdminSideMenu";

export default function AdminAddCity() {
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
              <h3 className="card-title fw-semibold text-white mt-2">Add City</h3>
              <Link to="/city" className="btn btn-light mt-2">Back</Link>
            </div>
            <div className="card-body">
              <form>
                <div className="row mt-1">
                  <div className="mt-2">
                    <label htmlFor="city" className="form-label">City</label>
                    <select className="form-select" aria-label="select">
                      <option selected>Select</option>
                      <option value={1}>Ahmedabad</option>
                      <option value={2}>Surat</option>
                      <option value={3}>Vadodara</option>
                      <option value={4}>Rajkot</option>
                      <option value={5}>Bhavnagar</option>
                      <option value={6}>Jamnagar</option>
                      <option value={7}>Junagadh</option>
                      <option value={8}>Gandhinagar</option>
                    </select>
                  </div>
                  <div className="mt-2">
                    <button type="submit" className="btn btn-dark">Add City</button> &nbsp;
                    <button type="reset" className="btn btn-dark">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}