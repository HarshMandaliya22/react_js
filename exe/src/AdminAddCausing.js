export default function AdminAddCausing() {
    return (<div>
        <div className="container-xxl position-relative bg-white d-flex p-0">
          {/* Spinner Start */}
          {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{"width":"3rem","height":"3rem"}} role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div> */}
          {/* Spinner End */}
          {/* Sidebar Start */}
          <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-dark navbar-light">
              <a href="AdminHome.html" className="navbar-brand mx-4 mb-3">
                <h3 className="text-white">
                  <i>Booking Bites</i>
                </h3>
              </a>
              <div className="d-flex align-items-center ms-4 mb-4">
                <div className="position-relative">
                  <img className="rounded-circle" src="img/user.jpg" alt style={{"width":"40px","height":"40px"}} />
                  <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1">
                  </div>
                </div>
                <div className="ms-3">
                  <h6 className="mb-0 text-white">Jhon Doe</h6>
                  <span className="text-white">Admin</span>
                </div>
              </div>
              <div className="navbar-nav w-100">
                <a href="AdminHome.html" className="nav-item nav-link"><i className="fa fa-home me-2" />Home</a>
                <a href="AdminChef.html" className="nav-item nav-link"><i className="fa-solid fa-cheese" />Chef</a>
                <a href="AdminCity.html" className="nav-item nav-link"><i className="fa fa-city me-2" />City</a>
                <a href="AdminCausing.html" className="nav-item nav-link active"><i className="fa fa-utensils me-2" />Causing</a>
                <a href="AdminService.html" className="nav-item nav-link"><i className="fa-solid fa-bell-concierge" />Service</a>
                <a href="#" className="nav-item nav-link"><i className="fa-solid fa-right-from-bracket" />Log Out</a>
                <a href="AdminForgotPassword.html" className="nav-item nav-link"><i className="fa-solid fa-gear" />Forgot
                  Password</a>
              </div>
            </nav>
          </div>
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
                  <img className="rounded-circle me-lg-2" src="img/user.jpg" alt style={{"width":"40px","height":"40px"}} />
                  <span className="d-none d-lg-inline-flex">John Doe</span>
                </div>
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
                <a href="AdminCausing.html" className="btn btn-light mt-2">Back</a>
              </div>
              <div className="card-body">
                <form action>
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
      </div>);
}