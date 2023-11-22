import React from 'react' 6.9k (gzipped: 2.7k)
import './Popular.css'
import data_product from '../Assets/data'


const Popular = () => {
    return (
        <div className = 'popular' >
           <h1> POPULAR IN WOMEN </h1>
           <hr />
           <div className="popularitem">
            {data_product.map((iteam)=> {
             return <Item key ={i} id= {item.id}  name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />
            })}
           </div>
        </div>
    )
}

export default Popular
const Popular = () => {
    return (
        <div>

        </div>
    )
}
export default Popular
