import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import AddProduct from './pages/AddProduct';


function App() {
  return (
    <Router>
      <div id="main-container">
        <Header />
        <div id="content-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/product_details/:id" element={< ProductDetails />} />
            <Route path="/add_product" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
