import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

function Navbar(){

        const [menu,setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo}></img>
                <div className="logo-title">
                    <p onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration:'none' }} to='/'>MOI BEAUTY</Link></p>
                    <small>Nature To Perfect</small>
                </div>
            </div>
                <ul className='nav-menu'>
                    <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration:'none' }} to='/'>Trang Chủ</Link>{menu==="shop"?<hr/>:<></>} </li>
                    <li onClick={()=>{setMenu("mat")}}><Link style={{ textDecoration:'none' }} to='/chamsocdamat'>Chăm Sóc Da Mặt</Link>{menu==="mat"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("moi")}}><Link style={{ textDecoration:'none' }} to='/sonmoi'>Son Môi</Link>{menu==="moi"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("phan")}}><Link style={{ textDecoration:'none' }} to='/phantrangdiem'>Phấn Trang Điểm</Link>{menu==="phan"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("may")}}><Link style={{ textDecoration:'none' }} to='/chikemay'>Chì Kẻ Mày</Link>{menu==="may"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("blog")}}>Blog Làm Đẹp{menu==="blog"?<hr/>:<></>}</li>

                </ul>
                <div className="nav-login-cart">
                    <button>Đăng Nhập</button>
                    <img src={cart_icon}></img>
                    <div className="nav-cart-count">0</div>
                </div>
                
            
        </div>
    )
}
export default Navbar