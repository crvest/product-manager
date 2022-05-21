import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {

    // state variables
    let [ title, setTitle ] = useState('');
    let [ price, setPrice ] = useState('');
    let [ description, setDescription ] = useState('');

    const createHandler = (e) => {
        // prevents page from reloading on submit
        e.preventDefault();
        // make a post request to create new product
        axios.post('http://localhost:8000/api/product/new', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <>
            <h2>Enter Product Info</h2>
            <form onSubmit={ createHandler }>
                <div className="form-group mb-3">
                    <label className='form-label' htmlFor='title'>Title</label>
                    <input className='form-control' type="text" name="title" id="title" onChange={ (e)=>{setTitle(e.target.value)} } />
                </div>
                <div className="form-group mb-3">
                    <label className='form-label' htmlFor='price'>Price</label>
                    <input className='form-control' type="text" name="price" id="price" onChange={ (e)=>{setPrice(e.target.value)} } />
                </div>
                <div className="form-groupp mb-3">
                    <label className='form-label' htmlFor='description'>Description</label>
                    <input className='form-control' type="text" name="description" id="description" onChange={ (e)=>{setDescription(e.target.value)} } />
                </div>
                <input className='btn btn-primary' type="submit" value='Create'></input>

            </form>
        </>
    )
}

export default ProductForm;