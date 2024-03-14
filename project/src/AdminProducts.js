import { Link, redirectDocument } from "react-router-dom";
import showError, { NetworkError ,showMessage } from "./toast-message";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import getBase, { getImages } from "./api";
import AdminSideMenu from "./AdminSideMenu";
import axios from 'axios'
import VerifyLogin from "./VerifyLogin";
export default function AdminProducts() {
    VerifyLogin();
        // create state array
        let [product, setProduct] = useState([]);
        let DeleteProduct = function (id) {
            console.log(id);
            let apiAddress = getBase() + "delete_product.php?id=" + id;
            axios({
              method:'get',
              responseType: 'json',
              url : apiAddress
            }).then((response) =>{
              console.log(response.data);
              let error = response.data[0]['error'];
              if(error !== 'no')
              showError(error);
            else
            showMessage((response.data[1]['message']));
              setProduct(product.filter((item)=>{
                if(item.id !== id){
                  return id;
                }
              }))
            })
          }
    //inner function
    let DisplayProduct = function (item) {
        return (<tr>
            <td>{item["id"]}</td>
            <td>{item["title"]} <br />
                <span className="text-danger">{item["categorytitle"]}</span>
            </td>
            <td> <img src={getImages() + "product/" + item.photo} className="img-fluid" alt />
            </td>
            <td>{(item["islive"]) === "1" ? "Yes" : "No"}</td>
            <td>
                {/* dynamic route because it has input */}
                <Link to={"/view-product/" + item["id"]}><i className="fa-solid fa-eye fa-2x" />
                </Link>
                &nbsp;
                <Link to={"/edit-product/" + item['id'] }><i className="fa-solid fa-pencil fa-2x" />
                </Link>
                &nbsp;
                <a href="#" onClick={(e) => { e.preventDefault(); DeleteProduct(item.id); }}>
                    <i className="fa-solid fa-trash fa-2x" />
                </a>
            </td>
        </tr>);
    }

    useEffect(() => {
        //call api
        if (product.length === 0) {
            let apiAddress = getBase() + "/product.php";
            fetch(apiAddress)
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data);
                    //get error info
                    let error = data[0]["error"];
                    if (error !== "no") {
                        showError();
                    }
                    else if (data[1]["total"] === 0) {
                        showError("No product is found");
                    }
                    else {
                        //there is no error and there is atleast one product
                        data.splice(0, 2);
                        // console.log(data);
                        setProduct(data);
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
            <ToastContainer />
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
                                <h3 className="mb-1">Product</h3>
                                <Link to="/add-product" className="btn btn-light">Add New Product </Link>
                            </div>
                            <div className="card-body">
                                <table className="table text-center table-bordered table-sm">
                                    <thead className="text-center">
                                        <tr>
                                            <th>id</th>
                                            <th>Product</th>
                                            <th width="40%">Photo</th>
                                            <th>Is Live</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product.map((item) => DisplayProduct(item))}
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
                        <Link className="btn btn-primary" to="/">Logout</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}