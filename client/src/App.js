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

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Product Manager</h1>
        <hr />
        <Switch>
          <Route exact path='/'>
            <ProductForm></ProductForm>
            <hr />
            <ProductViewAll></ProductViewAll>
          </Route>
          <Route exact path='/api/product/:_id'>
            <ProductViewOne></ProductViewOne>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
