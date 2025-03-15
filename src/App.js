import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './Pages/Main/Main'
import { SearchBar } from './Modules/SearchBar/SearchBar'
import { Category } from './Pages/Category/Category'
import { Product } from './Pages/Product/Product';



function App() {
  return (
    <BrowserRouter> 
        <div className="App">
          <SearchBar/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/category/:categoryId" element={<Category/>}/>
            <Route path="/category/:categoryId/:subcategory" element={<Category/>}/>
            <Route path="/category/:categoryId/:subcategory/:productId" element={<Product/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;