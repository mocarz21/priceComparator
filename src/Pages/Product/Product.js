import { Breadcrumbs } from '../../Modules/Breadcrumbs/Breadcrumbs';
import './Product.scss';
import { useLocation } from "react-router-dom";


export const Product = () => {
  const location = useLocation();
  const product = location.state?.product; // Pobieranie produktu z przekazanych danych

  console.log("Odebrany produkt:", product);

  if (!product) {
    return (
      <div className='container product-module'>
        <h1>Nie znaleziono produktu</h1>
      </div>
    );
  }

  return (
    <div className='container product-module'>
      <h1>{product.name}</h1>
      <img src={`/images/${product.image}`} alt={product.name} />
      <p>Cena: {product.price}</p>
      <p>Ocena: {product.rating} ⭐</p>
      <p>Kategoria: {product.category}</p>
      <Breadcrumbs productName={product.name}/>
    </div>
  );
};