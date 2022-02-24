import React from 'react';
import Header from './containers/Header';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

const App = () => {
  return (
    <div className="App">
    <Header/>
    <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<ProductListing/>}/>
      <Route path="/product/:productId" element={<ProductDetail/>}/>
      <Route path="*" element={<h2>404 Not Found</h2>} />
    </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App