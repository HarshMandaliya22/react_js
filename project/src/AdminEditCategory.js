import AdminSideMenu from "./AdminSideMenu";
export default function AdminEditCategory() {
   return(<div>
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
          <div className="container-fluid">
            <div className="card shadow">
              <div className="card-header d-flex justify-content-between bg-primary">
                <h3 className="mb-1 text-white">Category</h3>
                <a href="admin-category.html" className="btn btn-light">back</a>
              </div>
              <div className="card-body">
                <h5 className="border-bottom pb-2">Edit category</h5>
                {/* vertical form */}
                <form action>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" id="title" name="title" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="photo" className="form-label">Photo</label>
                    <input type="file" id="photo" name="photo" className="form-control" required accept="image/*" />
                  </div>
                  <div className="mb-3">
                    <b>Is this category live?</b>
                    <div className="form-check">
                      <input type="radio" name="islive" id="yes" className="form-check-input" required defaultValue={1} />
                      <label className="form-check-label" htmlFor="yes">Yes</label>
                    </div>
                    <div className="form-check">
                      <input type="radio" name="islive" id="no" className="form-check-input" defaultValue={0 } required />
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
          <a className="btn btn-primary" href="login.html">Logout</a>
        </div>
      </div>
    </div>
  </div>
</div>);
}