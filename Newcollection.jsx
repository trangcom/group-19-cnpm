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
                return 
            })}
          </div>

        </div>
    )
}

export default Newcollection