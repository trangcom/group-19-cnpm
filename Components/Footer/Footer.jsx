import './Footer.css'
import { Button } from 'react-bootstrap';
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'
import youtube_icon from '../Assets/youtube_icon.png'

function Footer(){
    return (
        <div className="footer">
            <div className="newsletter">
                <h2>Đăng ký Email để nhận thông tin mới nhất, ưu đãi đặc biệt và hơn thế nữa!</h2>
                <p>Bằng cách nhập địa chỉ email của bạn, bạn đồng ý nhận email tiếp thị từ MOI Beauty theo địa chỉ email được cung cấp và hủy đăng kí nhận tin bất cứ lúc nào.</p>
                <div>
                    <input type="email" placeholder='Email của bạn'/>
                    <Button>Đăng ký</Button>
                </div>
            </div>
            <div className="footer-infor">
                <div className="footer-product">
                <h2>Sản phẩm</h2>
                    <ul className="footer-links">
                        <li>Chăm sóc da mặt</li>
                        <li>Son môi</li>
                        <li>Phấn trang điểm</li>
                        <li>Chì kẻ mày</li>
                    </ul>
                </div>

                <div className="footer-company">
                <h2>Công Ty</h2>
                    <ul className="footer-links">
                        <li>Về MOI</li>
                        <li>Liên hệ nhượng quyền</li>
                        <li>MOI tuyển dụng</li>
                    </ul>
                </div>
                <div className="footer-customer">
                <h2>Dịch vụ khách hàng</h2>
                    <ul className="footer-links">
                        <li>FAQS</li>
                        <li>Bảo mật thông tin</li>
                        <li>Chính sách chung</li>
                        <li>Tra cứu đơn hàng</li>
                        <li>Email góp ý</li>
                    </ul>
                </div>
            </div>
            <div className="footer-logo">
                <img src={footer_logo} alt=""/>
                <p>MOI BEAUTY</p>
            </div>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <a href=""><img src={instagram_icon} alt="" /></a>
                </div>
                <div className="footer-icons-container">
                    <a href=""><img src={facebook_icon} alt="" /></a>
                </div>
                <div className="footer-icons-container">
                    <a href=""><img src={youtube_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-copyright">
            <hr/>
            <p>&copy; 2023 MOI Beauty. All Rights Reserved</p>
            <small>Author: Group 19 Tuesday</small>
            </div>
        </div>

    );
}
export default Footer
