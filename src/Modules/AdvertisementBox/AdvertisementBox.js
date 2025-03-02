import './AdvertisementBox.scss'

export const AdvertisementBox = () => {
  
  return (
    <div className="advertisement-box container">
      <div className='row img-box' >
        <img
          src='./reklama_1.png' 
          alt="Advertisement Banner" 
          className="advertisement-image"
        />
      </div>
      <div className='row'>
        <div className="advertisement-content">
          <h2>2500 PLN for a laptop for teachers!</h2>
        </div>
      </div>
    </div>
  );
};