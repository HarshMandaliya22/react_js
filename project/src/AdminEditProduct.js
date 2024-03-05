import { Link } from "react-router-dom";
import AdminSideMenu from "./AdminSideMenu";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import getBase, { getImages } from "./api";
import axios from "axios";
import showError, { NetworkError, showMessage } from "./toast-message";
import { useNavigate } from "react-router-dom";
import { useDebugValue, useEffect, useState } from "react";
export default function AdminEditproduct() {
  let { productid } = useParams();
  console.log(productid);
  let [categoryid, setCategoryId] = useState('');
  let [title, setTitle] = useState('');
  let [price, setPrice] = useState('');
  let [size, setSize] = useState('');
  let [weight, setWeight] = useState('');
  let [stock, setStock] = useState('');
  let [detail, setDetail] = useState('');
  let [islive, setIsLive] = useState('');
  let [photo, setPhoto] = useState('');
  let [oldPhoto, setOldPhoto] = useState('');
  let [isFetched, setIsFetched] = useState(false);
  let [category, setCategory] = useState([]); //create state array
  let fetchSingleProduct = function () {
    let apiAddress = getBase() + "product.php?productid=" + productid;
    console.log(apiAddress);
    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    }).then((response) => {
      console.log(response);
      let error = response.data[0]['error'];
      if (error != 'no')
        showError(error);
      else if (response.data[1]['total'] == 0) {
        showError('no product found');
      }
      else {
        setTitle(response.data[2]['title']);
        setPrice(response.data[2]['price']);
        setWeight(response.data[2]['weight']);
        setStock(response.data[2]['stock']);
        setCategoryId(response.data[2]['categoryid']);
        setOldPhoto(response.data[2]['photo']);
        setSize(response.data[2]['size']);
        setDetail(response.data[2]['detail']);
        setIsLive(response.data[2]['islive']);
        setIsFetched(true);
      }
    }).catch((error) => {
      if (error.code === 'ERR_NETWORK')
        showError('OOPS something went wrong, it seems you are offline or server is offline');
    });
  }
  let fetchCategories = function() {
    let apiAddress = getBase() + "category.php";
    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    }).then((response) => {
      console.log(response);
      let error = response.data[0]['error'];
      if (error !== 'no')
        showError(error);
      else if (response.data[1]['total'] === 0) {
        showError('no category found');
      }
      else {
        response.data.splice(0, 2);
        setCategory(response.data);
      }
    }).catch((error) => {
      console.log(error);
      if (error.code === 'ERR_NETWORK')
        showError('you are offline or server is offline');

    });
  }
  let UpateProduct = function (event) {
    event.preventDefault();
    let apiAddress = getBase() + "update_product.php?id=" + productid;
    let form = new FormData();
    form.append("categoryid", categoryid);
    form.append('title', title);
    form.append('price', price);
    form.append('stock', stock);
    form.append('weight', weight);
    form.append('islive', islive);
    form.append('photo', photo);
    form.append('size', size);
    form.append('details', detail);
    axios({
      method: 'post',
      responseType: 'json',
      url: apiAddress,
      data: form
    });
  }
  useEffect(() => {
    if (isFetched === false) {
      fetchSingleProduct();
      fetchCategories();
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
            <div className="card">
              <div className="card-header bg-primary text-white d-flex justify-content-between">
                <h3 className="mb-1">Product</h3>
                <Link to="/products" className="btn btn-light">back</Link>
              </div>
              <div className="card-body ">
                <div className="row">
                  <div className="col-3">
                    <img src={getImages() + "product/" + oldPhoto} className="img-fluid" alt />
                  </div>
                  <div className="col-9">
                    <h5 className="border-bottom pb-2">Edit product</h5>
                    <form onSubmit={UpateProduct}>
                      <div className="row">
                        <div className="col-md-3">
                          <label htmlFor="categoryid" className="form-label">Change Category ID</label>
                          <select className="form-select" id="categoryid" name="categoryid" required autofocus>
                            <option value={''}>Select Category</option>
                            {category.map((item) => {
                              if(categoryid===item.id)
                              return <option selected value={item.id}>{item.title}</option>
                              else
                              return <option value={item.id}>{item.title}</option>
                            })}
                          </select>
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="title" className="form-label">Edit Title</label>
                          <input type="text" className="form-control" id="title" name="title" required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="price" className="form-label">Edit Price</label>
                          <input type="number" className="form-control" id="price" name="price" required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="stock" className="form-label">Edit Stock</label>
                          <input type="number" className="form-control" id="stock" name="stock" required
                            value={stock}
                            onChange={(e) => setStock(e.target.value)} />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-4">
                          <label htmlFor="weight" className="form-label">Edit Weight</label>
                          <input type="text" className="form-control" id="weight" name="weight" required
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="size" className="form-label">Edit Size</label>
                          <input type="text" className="form-control" id="size" name="size" required
                            value={size}
                            onChange={(e) => setSize(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="photo" className="form-label">Change Photo</label>
                          <input type="file" className="form-control" id="photo" name="photo" accept="image/*" required
                            onChange={(e) => setPhoto(e.target.files[0])} />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-2">
                          <label className="form-check-label d-block">Is Live</label>
                          <div className="form-check form-check">
                            <input className="form-check-input" type="radio" name="islive" id="yes" value="1" required
                              onChange={(e) => setSize(e.target.value)}
                              checked={islive === '1'} />
                            <label className="form-check-label" htmlFor="yes">Yes</label>
                          </div>
                          <div className="form-check form-check">
                            <input className="form-check-input" type="radio" name="islive" id="no" value="0" required
                              onChange={(e) => setSize(e.target.value)}
                              checked={islive === '0'} />
                            <label className="form-check-label" htmlFor="no">No</label>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <label htmlFor="detail" className="form-label">Change Detail</label>
                          <textarea className="form-control" id="detail" name="detail" rows={2} required value={detail}
                            onChange={(e) => setDetail(e.target.value)}
                          />
                        </div>
                        <div className="col-md-3">
                          <button type="submit" className="btn btn-primary mt-4 w-100">Save Changes</button>
                          <button type="reset" className="btn btn-dark w-100 mt-1">Clear</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
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