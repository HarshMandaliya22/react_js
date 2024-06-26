import React from 'react';
import { Link } from 'react-router-dom';
import AdminSideMenu from "./AdminSideMenu";

export default function AdminAddCausing() {
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
              <h3 className="card-title fw-semibold text-white mt-2">Add Causing</h3>
              <Link to="/causing" className="btn btn-light mt-2">Back</Link>
            </div>
            <div className="card-body">
              <form action="">
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="causing" className="form-label">Add Causing Name</label>
                    <input type="text" className="form-control" id="fname" placeholder="Add Causing Name" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="photo" className="form-label">Photo</label>
                    <input type="file" className="form-control" id="photo" name="photo" accept="image/*" />
                  </div>
                  <div className="col-lg-10 mt-3">
                    <label htmlFor="detail" className="form-label">Detail</label>
                    <textarea className="form-control" id="detail" name="detail" rows={2} required defaultValue={"                                    "} />
                  </div>
                  <div className="col-lg-2 d-flex justify-content-end mt-5">
                    <button type="submit" className="w-100 btn btn-dark">Add Causing</button> &nbsp;
                    <button type="reset" className="w-100 btn btn-dark">Clear All</button>
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