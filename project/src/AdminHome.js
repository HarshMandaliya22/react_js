import AdminSideMenu from "./AdminSideMenu";
export default function AdminHome() {
    return (<div>
        <div id="wrapper">
            {/* Sidebar */}
            <AdminSideMenu/>
            {/* End of Sidebar */}
            {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
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
                <a className="dropdown-item" href="admin-profile.html">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                  Profile
                </a>
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
          <div className="row">
            <div className="col-12">
              <h2 className="mb-3">Sales Summary</h2>
            </div>
            <div className="col-lg-3">
              <div className="card overflow-hidden">
                <div className="card-body p-4">
                  <h4 className="mb-9 fw-semibold border-bottom pb-2">Today Sales</h4>
                  <div className="col-12">
                    <h5 className="fw-semibold mb-3"><span className="badge bg-primary text-white p-2">100</span>
                      Orders</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card overflow-hidden">
                <div className="card-body p-4">
                  <h4 className="mb-9 fw-semibold border-bottom pb-2">Weekly Sales</h4>
                  <div className="col-12">
                    <h5 className="fw-semibold mb-3"><span className="badge bg-primary text-white p-2">100</span>
                      Orders</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card overflow-hidden">
                <div className="card-body p-4">
                  <h4 className="mb-9 fw-semibold border-bottom pb-2">Monthly Sales</h4>
                  <div className="col-12">
                    <h5 className="fw-semibold mb-3"><span className="badge bg-primary text-white p-2">100</span>
                      Orders</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card overflow-hidden">
                <div className="card-body p-4">
                  <h4 className="mb-9 fw-semibold border-bottom pb-2">Yearly Sales</h4>
                  <div className="col-12">
                    <h5 className="fw-semibold mb-3"><span className="badge bg-primary text-white p-2">100</span>
                      Orders</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <h2 className="mb-3">Shop Summary</h2>
            </div>
            <div className="col-lg-4">
              <div className="card overflow-hidden">
                <div className="card-body p-4">
                  <h4 className="mb-9 fw-semibold border-bottom pb-2">Total Users</h4>
                  <div className="col-12">
                    <h5 className="fw-semibold mb-3"><span className="badge bg-primary text-white p-2">100</span> Users
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card overflow-hidden">
                <div className="card-body p-4">
                  <h4 className="mb-9 fw-semibold border-bottom pb-2">Total Product</h4>
                  <div className="col-12">
                    <h5 className="fw-semibold mb-3"><span className="badge bg-primary text-white p-2">100</span>
                      Products</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card overflow-hidden">
                <div className="card-body p-4">
                  <h4 className="mb-9 fw-semibold border-bottom pb-2">Total Categories</h4>
                  <div className="col-12">
                    <h5 className="fw-semibold mb-3"><span className="badge bg-primary text-white p-2">100</span>
                      Category</h5>
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
          <a className="btn btn-primary" href="login.html">Logout</a>
        </div>
      </div>
    </div>
  </div>
</div>);
}