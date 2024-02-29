export default function AdminHome() {
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
                <a href="AdminHome.html" className="nav-item nav-link active"><i className="fa fa-home me-2" />Home</a>
                <a href="AdminChef.html" className="nav-item nav-link"><i className="fa-solid fa-cheese" />Chef</a>
                <a href="AdminCity.html" className="nav-item nav-link"><i className="fa fa-city me-2" />City</a>
                <a href="AdminCausing.html" className="nav-item nav-link "><i className="fa fa-utensils me-2" />Causing</a>
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
            <div className="row mt-4">
              <div className="col-12">
                <h2 className="mb-3">Orders Summary</h2>
              </div>
              <div className="col-lg-3">
                <div className="card overflow-hidden">
                  <div className="card-body p-4">
                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Today Orders</h4>
                    <div className="col-12">
                      <h5 className="fw-semibold mb-3"><span className="badge bg-dark text-white p-2">100</span>
                        Orders</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card overflow-hidden">
                  <div className="card-body p-4">
                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Weekly Orders</h4>
                    <div className="col-12">
                      <h5 className="fw-semibold mb-3"><span className="badge bg-dark text-white p-2">100</span>
                        Orders</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card overflow-hidden">
                  <div className="card-body p-4">
                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Monthly Orders</h4>
                    <div className="col-12">
                      <h5 className="fw-semibold mb-3"><span className="badge bg-dark text-white p-2">100</span>
                        Orders</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card overflow-hidden">
                  <div className="card-body p-4">
                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Yearly Orders</h4>
                    <div className="col-12">
                      <h5 className="fw-semibold mb-3"><span className="badge bg-dark text-white p-2">100</span>
                        Orders</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <h2 className="mb-3">Shop Summary</h2>
              </div>
              <div className="col-lg-4">
                <div className="card overflow-hidden">
                  <div className="card-body p-4">
                    <h4 className="mb-9 fw-semibold border-bottom pb-2">Total Chefs</h4>
                    <div className="col-12">
                      <h5 className="fw-semibold mb-3"><span className="badge bg-dark text-white p-2">100</span>
                        Chefs
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </div>
        </div>
      </div>);
}