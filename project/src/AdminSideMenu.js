import { Link } from 'react-router-dom';
export default function AdminSideMenu() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <li>
                {/* Sidebar - Brand */}
                <Link className="sidebar-brand" to="/home">
                    <h3 className><i className="fa-brands fa-shopify" /> Online Shop</h3>
                </Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Divider */}
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/home">
                    <i className="fa-solid fa-house" />
                    <span>Home</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/category">
                    <i className="fa-solid fa-tag" />
                    <span>Category</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/products">
                    <i className="fa-solid fa-gift" />
                    <span>Products</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/orders">
                    <i className="fa-solid fa-box" />
                    <span>Orders</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/users">
                    <i className="fa-solid fa-users" />
                    <span>Users</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/change-password">
                    <i className="fa-solid fa-gear" />
                    <span>Change Password</span>
                </Link>
            </li>
        </ul>
    );
}
