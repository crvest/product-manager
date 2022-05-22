import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductViewAll from './components/ProductViewAll';
import ProductViewOne from './components/ProductViewOne';
import ProductEdit from './components/ProductEdit';


function App() {
  // toggler to rerender view all after product is created, passed as props through ProductForm tag
  const [ createToggle, setCreateToggle ] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Product Manager</h1>
        <Link to='/'><button className='btn btn-primary'>Home</button></Link>
        <hr />
        <Switch>
          <Route exact path='/'>
            <ProductForm createToggle={createToggle} setCreateToggle={setCreateToggle}></ProductForm>
            <hr />
            <ProductViewAll createToggle={createToggle}></ProductViewAll>
          </Route>
          <Route exact path='/product/:_id'>
            <ProductViewOne></ProductViewOne>
          </Route>
          <Route exact path='/product/update/:_id'>
            <ProductEdit></ProductEdit>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
