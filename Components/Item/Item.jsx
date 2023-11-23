import React from 'react' 
import '.Item.css'

const Item = (props) =>{
    return (
        <div className = 'item'>
            <Link to={'/product/${props.id}'}><img onClick={scrollTo(0,0)}/>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-price-old">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}
