import './ProductLists.scss'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const products = [
  {
    id: 1,
    name: "Motorola Moto G85 5G 12/256GB Szary",
    category: "Smartfony",
    price: "888,00 zł",
    image: "motorola_g85.png",
    rating: 4.7,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra SM-S928 12/256GB Czarny",
    category: "Smartfony",
    price: "3 751,05 zł",
    image: "samsung_s24_ultra.png",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Motorola Edge 50 Neo 5G 12/512GB Stalowy",
    category: "Smartfony",
    price: "1 349,00 zł",
    image: "motorola_edge50.png",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Apple iPhone 15 128GB Czarny",
    category: "Smartfony",
    price: "2 910,67 zł",
    image: "iphone_15.png",
    rating: 4.8,
  },
];

export const ProductLists = () =>{

  const { categoryId, subcategory } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryId === "smartfony" && subcategory === "smartfony") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts([]);
    }
  }, [categoryId, subcategory]);

  return (
    <div className="container product-list-module">
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="row-md-4 mb-4 product-box">
              <div className="card">
                <img className="card-img-top" src={`/images/${product.image}`} alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Cena: {product.price}</p>
                  <p className="card-text">Ocena: {product.rating} ⭐</p>
                  <button className="btn btn-primary">Sprawdź ofertę</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col">
            <p>Brak produktów w tej kategorii.</p>
          </div>
        )}
      </div>
    </div>
  );
};
