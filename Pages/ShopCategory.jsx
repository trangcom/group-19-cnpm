import React from 'react' 6.9k (gzipped: 2.7k)
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../component/ Assets/dropdown_icon.png'
const ShopCategory = (props) => { 
     const {all_product} = useContext(Shopcontext);

    return (
        <div className= 'shop-category'>
            <img src={props.banner} alt="" />
            <div className="shopcategory-indexsort">
                <p>
                    <span>showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort" > 
                    sort by <img src="" alt="" />
                </div>
            </div>
        </div>
  )
}

export default ShopCategory
function ShopCategory(){
    return(
        <div>

        </div>
    );
}
export default ShopCategory
