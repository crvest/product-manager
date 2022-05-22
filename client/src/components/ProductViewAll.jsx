import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'
import { useParams } from 'react-router';

const ProductViewAll = (props) => {

    // declare state variable to store axios call in
    const [ allProducts, setAllProducts ] = useState([]);
    const history = useHistory();
    const {_id} = useParams();
    // set state variable to trigger useEffect and rerender component
    const [ deleteToggle, setDeleteToggle ] = useState(false);

    // axios call to get all products from db
    // useEffect to prevent endless looping from updating state variable
    useEffect( () => {
        axios.get('http://localhost:8000/product')
            .then(res => {
                console.log('response: ', res)
                setAllProducts(res.data.product)
            })
            .catch(err => {
                console.log('error: ',err)
            })
    },[deleteToggle, props.createToggle])

    // delete product
    const deleteProduct = (_id) => {
        axios.delete(`http://localhost:8000/product/delete/${_id}`)
            .then(res => {
                console.log('response: ', res)
                // sets delete toggle to opposite of current value, causing component to re-render
                setDeleteToggle(!deleteToggle);
            })
            .catch(err => {
                console.log('error: ', err)
            })
    }


    return (
        <>
        <h1>Viewing all Products</h1>
        { 
        allProducts.map( (productObj, idx) => {
            return (
                <div key={idx} className="card mb-2" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title"> <Link to={`/product/${productObj._id}`}>{ productObj.title }</Link></h5>
                        <h6 className="card-subtitle mb-2 text-muted">${ productObj.price}</h6>
                        <p className="card-text">{ productObj.description }</p>
                        <Link to={`/product/update/${productObj._id}`}><button className="btn btn-warning btn-sm me-1">Edit</button></Link>
                        <button onClick={ (e) => {deleteProduct(productObj._id)} } className="btn btn-danger btn-sm ">Delete</button>
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