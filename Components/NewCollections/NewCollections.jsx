import React from 'react' 6.9k (gzipped: 2.7k)
import './Newcollection.css'
import new_collection from '/../Assets/new_collections'

const Newcollection = () => {
    return (
        <div className = 'new-collection' >
          <h1>NEW COLLECTION</h1>
          <hr />
          <div className = "collections">
            {new_collection.map((item,i) => {
                return <Item key = {i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
            })}
          </div>

        </div>
    )
}

export default Newcollection
