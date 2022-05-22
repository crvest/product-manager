import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {

    // state variables
    let [ title, setTitle ] = useState('');
    let [ price, setPrice ] = useState('');
    let [ description, setDescription ] = useState('');

    // validation error state variable
    let [ errors, setErrors ] = useState({});

    const createHandler = (e) => {
        // prevents page from reloading on submit
        e.preventDefault();
        // pack state variables into a signle object
        let formData = {title, price, description}
        // make a post request to create new product
        axios.post('http://localhost:8000/product/new', formData)
            .then(res => {
                console.log('response: ', res)
                // check for validation errors
                if(res.data.error){
                    setErrors(res.data.error.errors)
                }
                // clear form if no validation errors
                else {
                    setTitle('');
                    setPrice('');
                    setDescription('');
                }
            })
            .catch(err => console.log('error: ', err))
    }

    return (
        <>
            <h2>Enter Product Info</h2>
            <form onSubmit={ createHandler }>
                <div className="form-group mb-3">
                    <label className='form-label' htmlFor='title'>Title</label>
                    <input className='form-control' type="text" name="title" id="title" onChange={ (e)=>{setTitle(e.target.value)} } value={title} />
                    <p className='text-danger'>{errors.title?.message}</p>
                </div>
                <div className="form-group mb-3">
                    <label className='form-label' htmlFor='price'>Price</label>
                    <input className='form-control' type="text" name="price" id="price" onChange={ (e)=>{setPrice(e.target.value)} } value={price} />
                    <p className='text-danger'>{errors.price?.message}</p>
                </div>
                <div className="form-groupp mb-3">
                    <label className='form-label' htmlFor='description'>Description</label>
                    <input className='form-control' type="text" name="description" id="description" onChange={ (e)=>{setDescription(e.target.value)} } value={description} />
                    <p className='text-danger'>{errors.description?.message}</p>
                </div>
                <input className='btn btn-primary' type="submit" value='Create'></input>

            </form>
        </>
    )
}

export default ProductForm;