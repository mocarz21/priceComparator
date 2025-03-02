import './DealsAndOffers.scss'

const products = [
  { id: 1, name: "Roborock Qrevo Curv White", price: "4 787,00 zł", image: "URL_OBRAZU_1", rating: 5, reviews: 10 },
  { id: 2, name: "Roborock Q8 Max+ Biały", price: "1 699,00 zł", image: "URL_OBRAZU_2", rating: 5, reviews: 12 },
  { id: 3, name: "PHILIPS Ovi Dual Basket AirFryer NA352/00", price: "698,00 zł", image: "URL_OBRAZU_3", rating: 4.5, reviews: 34 },
  { id: 4, name: "Microsoft Office 2021 Professional Plus", price: "10,00 zł", image: "URL_OBRAZU_4", rating: 4.5, reviews: 999 },
  { id: 5, name: "FujiFilm Colorfilm Instax mini Glossy (10x2/PK)", price: "68,65 zł", image: "URL_OBRAZU_5", rating: 4.5, reviews: 322 }
];

export const DealsAndOffers = () =>{

  return (
    <div className="dealsandoffers-module row">
        {products.map((product) => (
            <div key={product.id} className="product-item col">
                <img src={product.image} alt={product.name} className="product-image" />
                <p className="product-price">od <span>{product.price}</span></p>
                <p className="product-name">{product.name}</p>
                <div className="product-rating">
                    {Array.from({ length: Math.round(product.rating) }, (_, index) => (
                        <span key={index}>⭐</span>
                    ))} ({product.reviews})
                </div>
            </div>
        ))}
    </div>
  );
};
