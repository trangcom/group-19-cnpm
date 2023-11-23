import React from 'react' 
import Breadcrum from './Breadcrum/Breadcrum';
const Product = () => {
   const {all_product}= useContext(ShopContext);
   const{productId}= useParams();
   const product = all_product.find((e)=> e.id === Number(productId));
    return (
        <div>
            <Breadcrum product={product}/>
        </div>
    )
}

export default Product
