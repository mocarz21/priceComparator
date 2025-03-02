import './BrandList.scss'

export const BrandList = () =>{

  const brands = [
    { id: 1, name: "Apple", logo: "https://cdn0.iconfinder.com/data/icons/significon-social/512/Significon-Apple-256.png" },
    { id: 2, name: "Samsung", logo: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/samsung-512.png" },
    { id: 3, name: "Sony", logo: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/sony-512.png" },
    { id: 4, name: "LG", logo: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/lg-512.png" },
    { id: 5, name: "Microsoft", logo: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/78-microsoft-512.png" },
    { id: 6, name: "Philips", logo: "URL_LOGO_PHILIPS" }
  ];
  

  return(
    <div className='brand-list-module container'>
      {brands.map((brand) => (
        <div key={brand.id} className="brand-item">
          <img src={brand.logo} alt={brand.name} className="brand-logo" />
          <span className="brand-name">{brand.name}</span>
        </div>
      ))} 
    </div>
  )
}