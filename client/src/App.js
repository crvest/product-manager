import './App.css';
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
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Product Manager</h1>
        <Link to='/'><button className='btn btn-primary'>Home</button></Link>
        <hr />
        <Switch>
          <Route exact path='/'>
            <ProductForm></ProductForm>
            <hr />
            <ProductViewAll></ProductViewAll>
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
