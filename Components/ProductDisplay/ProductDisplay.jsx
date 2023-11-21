
import React from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/start_dull_icon.png"
const ProductDisplay = (props) => {
    const {product} = props;
    return (
        <div className = 'productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={start_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Noi dung minh tu ghi nhe
                </div>
                <div className="productdisplay-right-size">
                    <h1>Chon da phu hop</h1>
                    <div className="productdisplay-right-sizes">
                        <div>Da dau</div>
                        <div>da hon hop</div>
                        <div>da kho</div>
                        <div>da</div>
                        <div>da</div>
                    </div>
                </div>
                <button>Add To Cart</button>
                <p className='productdisplay-right-category'><span>Category:</span>Women,man</p>
                <p className='productdisplay-right-category'><span>Tags</span>Women,man</p>
            </div>
                
        </div> 
    )
}

export default ProductDisplay
