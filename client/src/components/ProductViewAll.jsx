import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const ProductViewAll = () => {

    // declare state variable to store axios call in
    const [ allProducts, setAllProducts ] = useState([]);

    // axios call to get all products from db
    // useEffect to prevent endless looping from updating state variable
    useEffect( () => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                console.log('response: ', res)
                setAllProducts(res.data.product)
            })
            .catch(err => {
                console.log('error: ',err)
            })
    },[])


    return (
        <>
        <h1>Viewing all Products</h1>
        { 
        allProducts.map( (productObj, idx) => {
            return (
                <div key={idx} className="card mb-2" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title"> <Link to={`/api/product/${productObj._id}`}>{ productObj.title }</Link></h5>
                        <h6 className="card-subtitle mb-2 text-muted">${ productObj.price}</h6>
                        <p className="card-text">{ productObj.description }</p>
                    </div>
                </div>
            )
        }
        )
        }
        </>
    )
}

export default ProductViewAll;