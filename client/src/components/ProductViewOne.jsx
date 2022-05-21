import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductViewOne = () => {

    // set state variable for paramater from route path
    const { _id } = useParams();
    // set state variable for axios call
    const [ oneProduct, setOneProduct ] = useState([]);

    useEffect( () => {
        axios.get(`http://localhost:8000/api/product/${_id}`)
            .then(res => {
                console.log('response: ', res)
                setOneProduct(res.data.product)
            })
            .catch(err => {
                console.log('error: ', err)
            })
    },[])


    return (
        <>
        <h1>Viewing one Product</h1>
        { 
            <div className="card mb-2" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{ oneProduct.title }</h5>
                    <h6 className="card-subtitle mb-2 text-muted">${ oneProduct.price}</h6>
                    <p className="card-text">{ oneProduct.description }</p>
                </div>
            </div>
        }
        </>
    )
}

export default ProductViewOne;