import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import AdminLogIn from './AdminLogIn';
import AdminForgotPassword from './AdminForgotPassword';
import AdminAddCategory from './AdminAddCategory';
import AdminAddProduct from './AdminAddProduct';
import AdminCategory from './AdminCategory';
import AdminChangePassword from './AdminChnagePassword';
import AdminEditCategory from './AdminEditCategory';
import AdminEditproduct from './AdminEditProduct';
import AdminHome from './AdminHome';
import AdminOrders from './AdminOrders';
import AdminOrderDetail from './AdminOrderDetail';
import AdminProducts from './AdminProducts';
import AdminProfile from './AdminProfile';
import AdminUsers from './AdminUsers';
import AdminViewProduct from './AdminViewProduct';
let NoPageFound = () => <h1 >No Such Page Exist</h1>
function ProjectRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AdminLogIn />} />
                <Route path='/forgot-password' element={<AdminForgotPassword />} />
                <Route path='/add-category' element={<AdminAddCategory />} />
                <Route path='/add-product' element={<AdminAddProduct />} />
                <Route path='/category' element={<AdminCategory />} />
                <Route path='/change-password' element={<AdminChangePassword />} />
                <Route path='/edit-category' element={<AdminEditCategory />} />
                <Route path='/edit-product' element={<AdminEditproduct />} />
                <Route path='/home' element={<AdminHome />} />
                <Route path='/orders' element={<AdminOrders />} />
                <Route path='/order-detail' element={<AdminOrderDetail />} />
                <Route path='/products' element={<AdminProducts />} />
                <Route path='/profile' element={<AdminProfile />} />
                <Route path='/users' element={<AdminUsers />} />
                <Route path='/view-product/:productid' element={<AdminViewProduct />} />
                <Route path='*' element={<NoPageFound />} />
            </Routes>
        </BrowserRouter>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProjectRoute />)
