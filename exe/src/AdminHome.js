import React from 'react';
import { Link } from 'react-router-dom';

import AdminSideMenu from "./AdminSideMenu";

export default function AdminHome() {
  return (
    <div>
      <div className="container-xxl position-relative bg-white d-flex p-0">
        {/* Sidebar Start */}
        <AdminSideMenu/>
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
              <div href="#" className="nav-link">
                <img className="rounded-circle me-lg-2" src="admin/img/user.jpg" alt="" style={{ "width": "40px", "height": "40px" }} />
                <span className="d-none d-lg-inline-flex">John Doe</span>
              </div>
              <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              </div>
            </div>
          </div>
        </nav>
        {/* Navbar End */}
        <div class="container-fluid">
                <div class="row mt-4">
                    <div class="col-12">
                        <h2 class="mb-3">Orders Summary</h2>
                    </div>
                    <div class="col-lg-3">
                        <div class="card overflow-hidden">
                            <div class="card-body p-4">
                                <h4 class="mb-9 fw-semibold border-bottom pb-2">Today Orders</h4>
                                <div class="col-12">
                                    <h5 class="fw-semibold mb-3"><span class="badge bg-dark text-white p-2">100</span>
                                        Orders</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="card overflow-hidden">
                            <div class="card-body p-4">
                                <h4 class="mb-9 fw-semibold border-bottom pb-2">Weekly Orders</h4>
                                <div class="col-12">
                                    <h5 class="fw-semibold mb-3"><span class="badge bg-dark text-white p-2">100</span>
                                        Orders</h5>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="card overflow-hidden">
                            <div class="card-body p-4">
                                <h4 class="mb-9 fw-semibold border-bottom pb-2">Monthly Orders</h4>
                                <div class="col-12">
                                    <h5 class="fw-semibold mb-3"><span class="badge bg-dark text-white p-2">100</span>
                                        Orders</h5>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="card overflow-hidden">
                            <div class="card-body p-4">
                                <h4 class="mb-9 fw-semibold border-bottom pb-2">Yearly Orders</h4>
                                <div class="col-12">
                                    <h5 class="fw-semibold mb-3"><span class="badge bg-dark text-white p-2">100</span>
                                        Orders</h5>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12">
                        <h2 class="mb-3">Shop Summary</h2>
                    </div>
                    <div class="col-lg-4">
                        <div class="card overflow-hidden">
                            <div class="card-body p-4">
                                <h4 class="mb-9 fw-semibold border-bottom pb-2">Total Chefs</h4>
                                <div class="col-12">
                                    <h5 class="fw-semibold mb-3"><span class="badge bg-dark text-white p-2">100</span>
                                        Chefs
                                    </h5>

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