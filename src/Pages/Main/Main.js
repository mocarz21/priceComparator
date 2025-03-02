import {AdvertisementBox} from '../../Modules/AdvertisementBox/AdvertisementBox'
import { Navbar }  from '../../Modules/Navbar/Navbar'
import { DealsAndOffers } from '../../Modules/DealsAndOffers/DealsAndOffers'
import { BrandList } from '../../Modules/BrandList/BrandList'
import './Main.scss'

export const Main =()=>{

  return(
    <div className="main-module container">
      <div className='row'>
        <div className='col-3'>
          <Navbar/>
        </div>
        <div className='col'>
          <div className='row'>
            <div className='col column-first'>
              <AdvertisementBox/>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <DealsAndOffers/>
            </div>
          </div>  
        </div>
      </div>
      <div className='row'>
        <BrandList/>
      </div>
      <div className='row'>
        <DealsAndOffers/>
      </div>
    </div>
  )

}