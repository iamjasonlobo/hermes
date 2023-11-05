
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
    <h1>Home</h1>
      <ul>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/add-service">Add Service</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
      </ul>
    </div>
  );
};

export default App;
