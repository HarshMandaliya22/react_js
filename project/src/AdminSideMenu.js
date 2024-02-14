export default function AdminSideMenu()
{
    return(<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <li>
        {/* Sidebar - Brand */}
        <a className="sidebar-brand" href="admin-home.html">
            <h3 className><i className="fa-brands fa-shopify" /> Online Shop</h3>
        </a>
    </li>
    {/* Divider */}
    <hr className="sidebar-divider" />
    {/* Divider */}
    <li className="nav-item">
        <a className="nav-link collapsed" href="admin-home.html">
            <i className="fa-solid fa-house" />
            <span>Home</span>
        </a>
    </li>
    <li className="nav-item">
        <a className="nav-link collapsed" href="admin-category.html">
            <i className="fa-solid fa-tag" />
            <span>Category</span>
        </a>
    </li>
    <li className="nav-item">
        <a className="nav-link collapsed" href="admin-products.html">
            <i className="fa-solid fa-gift" />
            <span>Products</span>
        </a>
    </li>
    <li className="nav-item">
        <a className="nav-link collapsed" href="admin-orders.html">
            <i className="fa-solid fa-box" />
            <span>Orders</span>
        </a>
    </li>
    <li className="nav-item">
        <a className="nav-link collapsed" href="admin-users.html">
            <i className="fa-solid fa-users" />
            <span>Users</span>
        </a>
    </li>
    <li className="nav-item">
        <a className="nav-link collapsed" href="admin-change-password.html">
            <i className="fa-solid fa-gear" />
            <span>Change Password</span>
        </a>
    </li>
</ul>);
}