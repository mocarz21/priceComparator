import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../../Modules/Navbar/Navbar";
import { Breadcrumbs } from '../../Modules/Breadcrumbs/Breadcrumbs';
import { Filtry } from "../../Modules/Filtry/Filtry";
import { AdvertisementColumn } from "../../Modules/AdvertisementColumn/AdvertisementColumn";
import { ProductLists } from "../../Modules/ProductLists/ProductLists";
import {BrandList} from '../../Modules/BrandList/BrandList'
import { DealsAndOffers } from '../../Modules/DealsAndOffers/DealsAndOffers'
import './Category.scss'

export const Category = () => {
  const { categoryId, subcategory } = useParams();
  console.log('categoryId, subcategory',categoryId, subcategory)

  useEffect(() => {
    console.log("Aktualizacja:", { categoryId, subcategory });
  }, [categoryId, subcategory]);

  return (
    <div className="category-module container">
      <div className="row">
        <div className="col-3">
          <Navbar />
          <div className="row">
            <div className="col">
              <Filtry/>
            </div>
            <div className="col">
              <AdvertisementColumn/>
            </div>
          </div>
        </div>
        <div className="col col-right">
          <Breadcrumbs />
          <div className="row">
            <BrandList />
          </div>
          <div className="row">
            <DealsAndOffers/>
          </div>
          <div className="row">
            <ProductLists />
          </div>
        </div>
      </div>
    </div>
  );
};