import { Link } from "react-router-dom";
import AdminSideMenu from "./AdminSideMenu";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import showError, { NetworkError, showMessage } from "./toast-message";
import getBase, { getImages } from "./api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CategoryFetch from "./category_fetch_api";
import VerifyLogin from "./VerifyLogin";
export default function AdminAddProduct() {
  VerifyLogin();
  // create state variables to store input given by user
  let [categoryID, setCategoryID] = useState('');
  let [name, setName] = useState('');
  let [price, setPrice] = useState(0); // Assuming price is a number, adjust the initial value accordingly
  let [stock, setStock] = useState(0); // Assuming stock is a number, adjust the initial value accordingly
  let [weight, setWeight] = useState('');
  let [size, setSize] = useState('');
  let [photo, setPhoto] = useState('');
  let [isLive, setIsLive] = useState(false); // Assuming isLive is a boolean, adjust the initial value accordingly
  let [description, setDescription] = useState('');
  let [category, setCategory] = useState([])
  //create state array to store categories fetched from server
  let navigator = useNavigate(); //return object which is used to navigate user on other route
  {/* <CategoryFetch /> */ }
  useEffect(() => {
    //call api 
    if (category.length === 0) {
      let apiAddress = getBase() + 'category.php';
      fetch(apiAddress)
        .then((response) => response.json()) //convert string to json
        .then((data) => {
          console.log(data);
          //get error info
          let error = data[0]['error'];
          if (error !== 'no') //there is error
            showError(error);
          else if (data[1]['total'] === 0)
            showError('no category found');
          else {
            //there is not error and there are at least 1 category found 
            data.splice(0, 2)// remove 2 object from 0th position;
            console.log(data);
            setCategory(data);
          }
        })
        .catch((error) => {
          // console.log(error);
          // alert("oops something went wrong, please try after sometime.");
          // toast("");
          NetworkError('oops something went wrong, please try after sometime.');
        });
    }
  }
  );
  let insertProduct = function (event) {
    event.preventDefault();
    console.log(categoryID, name, price, stock, weight, size, isLive, description, photo);
    let apiAddress = getBase() + "insert_product.php";
    let form = new FormData();
    form.append("categoryid", categoryID); // categoryid is an input name set by backend developer, spelling mistake is not acceptable and categoryID is variable name set by us it can be anything here it is on line no.12
    form.append("name", name);
    form.append("price", price);
    form.append("size", size);
    form.append("weight", weight);
    form.append("detail", description);
    form.append("photo", photo);
    form.append("islive", isLive);
    form.append("stock", stock);
    console.log(form);
    axios({
      method: 'post',
      url: apiAddress,
      responseType: 'json',
      data: form
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
            navigator("/products");
          }, 2000);
        }
      }
    }).catch((error) => {
      if (error.code === 'ERR_NETWORK')
        NetworkError();
    });
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
            <div className="card">
              <div className="card-header bg-primary text-white d-flex justify-content-between">
                <h3 className="mb-1">Product</h3>
                <Link to="/products" className="btn btn-light">back</Link>
              </div>
              <div className="card-body ">
                <h5 className="border-bottom pb-2">Add new product</h5>
                <form onSubmit={insertProduct} method="post" encType="multipart/form-data">
                  <div className="row">
                    <div className="col-md-3">
                      <label htmlFor="categoryid" className="form-label">Category ID</label>
                      <select
                        className="form-select"
                        id="categoryid"
                        name="categoryid"
                        required
                        autoFocus
                        onChange={(event) => setCategoryID(event.target.value)}
                      >
                        {category.map((item) => {
                          return (<option value={item.id}>{item.title}</option>)
                        })}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="title" className="form-label">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="price" className="form-label">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        required
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="stock" className="form-label">Stock</label>
                      <input
                        type="number"
                        className="form-control"
                        id="stock"
                        name="stock"
                        required
                        value={stock}
                        onChange={(event) => setStock(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-4">
                      <label htmlFor="weight" className="form-label">Weight</label>
                      <input
                        type="text"
                        className="form-control"
                        id="weight"
                        name="weight"
                        required
                        value={weight}
                        onChange={(event) => setWeight(event.target.value)}
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="size" className="form-label">Size</label>
                      <input
                        type="text"
                        className="form-control"
                        id="size"
                        name="size"
                        required
                        value={size}
                        onChange={(event) => setSize(event.target.value)}
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="photo" className="form-label">Photo</label>
                      <input
                        type="file"
                        className="form-control"
                        id="photo"
                        name="photo"
                        required
                        onChange={(event) => setPhoto(event.target.files[0])}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-2">
                      <label className="form-check-label d-block">Is Live</label>
                      <div className="form-check form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="islive"
                          id="yes"
                          value="1"
                          required
                          onChange={() => setIsLive('1')}
                        />
                        <label className="form-check-label" htmlFor="yes">Yes</label>
                      </div>
                      <div className="form-check form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="islive"
                          id="no"
                          value="0"
                          required
                          onChange={() => setIsLive('0')}
                        />
                        <label className="form-check-label" htmlFor="no">No</label>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <label htmlFor="detail" className="form-label">Detail</label>
                      <textarea
                        className="form-control"
                        id="detail"
                        name="detail"
                        rows={3}
                        required
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                      />
                    </div>
                    <div className="col-md-3">
                      <button type="submit" className="btn btn-primary mt-4 w-100">Save
                        Changes</button>
                      <button type="reset" className="btn btn-dark w-100 mt-1">Clear</button>
                    </div>
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
  </div>)
}