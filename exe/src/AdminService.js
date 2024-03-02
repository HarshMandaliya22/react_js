import React from 'react';
import { Link } from 'react-router-dom';
import AdminSideMenu from "./AdminSideMenu";

export default function AdminService() {
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
                    <a href="#" className="sidebar-toggler flex-shrink-0">
                        <i className="fa fa-bars" />
                    </a>
                    <div className="navbar-nav align-items-center ms-auto">
                        <div className="nav-item dropdown">
                            <div href="#" className="nav-link">
                                <img className="rounded-circle me-lg-2" src="admin/img/user.jpg" alt style={{ "width": "40px", "height": "40px" }} />
                                <span className="d-none d-lg-inline-flex">John Doe</span>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Navbar End */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card shadow mt-3">
                                <div className="card-header bg-dark d-flex justify-content-between">
                                    <h3 className="card-title fw-semibold text-white mt-2">Service</h3>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered text-center">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Chef Name</th>
                                                    <th>User Name</th>
                                                    <th>Total person</th>
                                                    <th>Total Time</th>
                                                    <th>Cooking Date</th>
                                                    <th>Amount</th>
                                                    <th>Payment Status</th>
                                                    <th>Order Status</th>
                                                    <th>User Address</th>
                                                    <th>City</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Abc</td>
                                                    <td>Pqr</td>
                                                    <td>5</td>
                                                    <td>1 day</td>
                                                    <td>26/02/2024</td>
                                                    <td>700</td>
                                                    <td>online</td>
                                                    <td>Confirm</td>
                                                    <td>Mahila college,bhavnagar</td>
                                                    <td>Bhavnagar</td>
                                                </tr>
                                            </tbody>
                                        </table>
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