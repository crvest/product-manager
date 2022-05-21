import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App container">
      <h1>Product Manager</h1>
      <ProductForm></ProductForm>
    </div>
  );
}

export default App;
