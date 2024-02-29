export default function AdminAddChef() {
    return (<div>
      <div className="container-xxl position-relative bg-white d-flex p-0">
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
              <a href="AdminChef.html" className="nav-item nav-link  active"><i className="fa-solid fa-cheese" />Chef</a>
              <a href="AdminCity.html" className="nav-item nav-link"><i className="fa fa-city me-2" />City</a>
              <a href="AdminCausing.html" className="nav-item nav-link"><i className="fa fa-utensils me-2" />Causing</a>
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
              <h3 className="card-title fw-semibold text-white mt-2">Add Chef</h3>
              <a href="AdminChef.html" className="btn btn-light mt-2">Back</a>
            </div>
            <div className="card-body">
              <form action>
                <div className="row">
                  <div className="col-md-3">
                    <label htmlFor="fname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="fname" placeholder="First name" />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="lname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lname" placeholder="Last name" />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="photo" className="form-label">Photo</label>
                    <input type="file" className="form-control" id="photo" name="photo" accept="image/*" />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="expertization" className="form-label">Expertization</label>
                    <select className="form-select" aria-label="select">
                      <option selected>Select</option>
                      <option value={1}>Gujarati</option>
                      <option value={2}>Punjabi</option>
                      <option value={3}>South indian</option>
                      <option value={4}>Chinese</option>
                      <option value={5}>Italian</option>
                      <option value={6}>Beverages</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-3">
                    <label htmlFor="experience" className="form-label">Experience</label>
                    <input type="number" className="form-control" id="experience" name="experience" />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor className="form-label">City</label>
                    <select className="form-select" aria-label="select">
                      <option selected>Select</option>
                      <option value={1}>Rajkot</option>
                      <option value={2}>Bhavnagar</option>
                      <option value={3}>Jamnagar</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                  </div>
                  <div className="col-md-3 d-flex justify-content-end ">
                    <button type="submit" className="w-100 btn btn-dark mt-4">Add Chef</button> &nbsp;
                    <button type="reset" className="w-100 btn btn-dark mt-4">Clear All</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>);
}