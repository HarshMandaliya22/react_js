import { Link } from "react-router-dom";
import AdminSideMenu from "./AdminSideMenu";
import showError, { NetworkError } from "./toast-message";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import getBase from "./api";
export default function AdminOrders() {
  //inner function
  let DisplayOrder = function(item){
    return(<tr>
      <td>{item.id}</td>
      <td>{item.billdate}</td>
      <td>
        {item.amount}
      </td>
      <td>{item.orderstatus}</td>
      <td>{item.fullname}<br />
        {item.city} - {item.pincode}
      </td>
      <td width="15%">
        <Link to="/order-detail">
          <i className="fa fa-eye fa-2x" />
        </Link>&nbsp;
      </td>
    </tr>);
  }
  // create state array
  let [order, setorder] = useState([]);
  useEffect(() => {
    //call api
    if (order.length === 0) {
      let apiAddress = getBase() + "/orders.php";
      fetch(apiAddress)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          //get error info
          let error = data[0]["error"];
          if (error !== "no") {
            showError();
          }
          else if (data[1]["total"] === 0) {
            showError("No order is found");
          }
          else {
            //there is no error and there is atleast one product
            data.splice(0, 2);
            console.log(data);
            setorder(data);
          }
        })
        .catch((error) => {
          console.log(error);
          NetworkError('oops something went wrong, please try after sometime.')
        })
    }
  })
  return (<div>
    <div id="wrapper">
      {/* Sidebar */}
      <AdminSideMenu />
      {/* End of Sidebar */}
      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        <ToastContainer/>
        {/* Main Content */}
        <div id="content">
          {/* Topbar */}
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
              <i className="fa fa-bars" />
            </button>
            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">
              {/* Nav Item - Search Dropdown (Visible Only XS) */}
              <li className="nav-item dropdown no-arrow d-sm-none">
                <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-search fa-fw" />
                </a>
                {/* Dropdown - Messages */}
                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                      <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-search fa-sm" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
              <div className="topbar-divider d-none d-sm-block" />
              {/* Nav Item - User Information */}
              <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">Harsh Mandaliya</span>
                  <img className="img-profile rounded-circle" src="admin/img/undraw_profile.svg" />
                </a>
                {/* Dropdown - User Information */}
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                  <Link className="dropdown-item" to="/profile">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                    Profile
                  </Link>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          {/* End of Topbar */}
          {/* Begin Page Content */}
          <div className="container-fluid">
            <div className="card shadow">
              <div className="card-header bg-primary text-white d-flex justify-content-between">
                <h3 className="mb-1">Orders</h3>
              </div>
              <div className="card-body">
                <table className="table text-center table-bordered table-sm">
                  <thead>
                    <tr>
                      <th className="text-bg-light-gray">id</th>
                      <th className="text-bg-light-gray">BillDate</th>
                      <th className="text-bg-light-gray">Amount</th>
                      <th className="text-bg-light-gray">Status</th>
                      <th className="text-bg-light-gray">Delivery Detail</th>
                      <th className="text-bg-light-gray">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.map((item)=>DisplayOrder(item))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </div>
        {/* End of Main Content */}
        {/* Footer */}
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright © Harsh Mandaliya</span>
            </div>
          </div>
        </footer>
        {/* End of Footer */}
      </div>
      {/* End of Content Wrapper */}
    </div>
    {/* End of Page Wrapper */}
    {/* Logout Modal*/}
    <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div className="modal-footer">
            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <Link className="btn btn-primary" href="/">Logout</Link>
          </div>
        </div>
      </div>
    </div>
  </div>);
}