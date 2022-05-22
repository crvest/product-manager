import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios';

const ProductEdit = () => {

    // set state variable for paramater from route path
    const { _id } = useParams();
    // set state variable for axios call
    const [ oneProduct, setOneProduct ] = useState([]);
    // initialize useHistory
    const history = useHistory();

    useEffect( () => {
        axios.get(`http://localhost:8000/product/${_id}`)
            .then(res => {
                console.log('response: ', res)
                setOneProduct(res.data.product);
            })
            .catch(err => {
                console.log('error: ', err)
            })
    },[])

    // change handler to allow update of fields
    const changeHandler = (e)=> {
        // sets oneProduct to the value of the current field value and the current value of the field being changed
        setOneProduct({
            ...oneProduct,
            [e.target.name]: e.target.value
        })
    }

    // submit handler
    const submitHandler = (e)=>{
        // prevent reloading of the page
        e.preventDefault();
        // axios put request to update product
        axios.put(`http://localhost:8000/product/update/${_id}`, oneProduct)
            .then(res => {
                console.log('response: ', res)
                //redirects to main page
                history.push('/')
            })
            .catch(err => {
                console.log('error: ', err)
            })
    }

    return (
        <>
            <h2>Edit Product Info</h2>
            <form onSubmit={ submitHandler }>
                <div className="form-group mb-3">
                    <label className='form-label' htmlFor='title'>Title</label>
                    <input className='form-control' type="text" onChange={ changeHandler } name="title" id="title" value={ oneProduct.title } />
                </div>
                <div className="form-group mb-3">
                    <label className='form-label' htmlFor='price'>Price</label>
                    <input className='form-control' type="text" onChange={ changeHandler } name="price" id="price" value={ oneProduct.price }/>
                </div>
                <div className="form-groupp mb-3">
                    <label className='form-label' htmlFor='description'>Description</label>
                    <input className='form-control' type="text" onChange={ changeHandler } name="description" id="description" value={ oneProduct.description }/>
                </div>
                <input className='btn btn-primary' type="submit" value='Submit Changes'></input>
            </form>
        </>
    )
}

export default ProductEdit;