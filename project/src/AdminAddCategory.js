import { Link } from "react-router-dom";
import AdminSideMenu from "./AdminSideMenu";
import { useState } from "react";
import getBase from "./api";
import axios from "axios";
import showError, { NetworkError, showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AdminAddCategory() {
    // create 3 state variables
    let [title, setTitle] = useState("");
    let [photo, setPhoto] = useState("");
    let [islive, setIsLive] = useState("");
    let navigator = useNavigate(); // it will return object which is used to navigate user on other route
    let insertCategory = function (e) 
    {
        e.preventDefault(); // require to stop reloading the page
        console.log(title, photo, islive);
        //  call api
        let apiAddress = getBase() + "insert_category.php";
        console.log(apiAddress);
        let form = new FormData();
        form.append("title", title);
        form.append("photo", photo);
        form.append("islive", islive);
        axios({
            method: "post",
            responseType: "json",
            data: form,
            url: apiAddress
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if (error !== 'no')
                showError(error);
            else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if (success === 'no')
                    showError(message);
                else {
                    showMessage(message);
                    setTimeout(() => {
                        navigator("/category");
                    }, 5000);
                }
            }
        }).catch((error) => {
            if (error.code === 'ERR_NETWORK')
                NetworkError();
        })
    }

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
                        <div className="container-fluid">
                            <div className="card shadow">
                                <div className="card-header d-flex justify-content-between bg-primary">
                                    <h3 className="mb-1 text-white">Category</h3>
                                    <Link to="/category" className="btn btn-light">back</Link>
                                </div>
                                <div className="card-body">
                                    <h5 className="border-bottom pb-2">Add new category</h5>
                                    {/* vertical form */}
                                    <form method="post" onSubmit={insertCategory} encType="multipart/form-data">
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input type="text" id="title" name="title" className="form-control" required
                                                onChange={(event) => setTitle(event.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="photo" className="form-label">Photo</label>
                                            <input type="file" id="photo" name="photo" className="form-control" required accept="image/*"
                                                onChange={(event) => setPhoto(event.target.files[0])} />
                                            {/* whenever there is a file as a input we should write event.target.files    */}
                                            {/* accept attribute ensure the type of files */}
                                        </div>
                                        <div className="mb-3">
                                            <b>Is this category live?</b>
                                            <div className="form-check">
                                                <input type="radio" name="islive" id="yes" className="form-check-input" required value={1}
                                                    onChange={(event) => setIsLive(event.target.value)} />
                                                <label className="form-check-label" htmlFor="yes">Yes</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="radio" name="islive" id="no" className="form-check-input" value={0} required
                                                    onChange={(event) => setIsLive(event.target.value)} />
                                                <label className="form-check-label" htmlFor="no">No</label>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button type="submit" name="submit" className="btn btn-primary">Save
                                                changes</button>&nbsp;
                                            <button type="reset" name="reset" className="btn btn-dark">Clear all</button>
                                        </div>
                                    </form>
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