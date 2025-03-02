import { useParams } from "react-router-dom";
import { SearchBar } from "../../Modules/SearchBar/SearchBar";

export const Category = () => {
  const { categoryId, subcategory } = useParams();


  return (
    <div className="category-module container">
      <h1>Kategoria: {categoryId}</h1>
      <h2>Podkategoria: {subcategory}</h2>
    </div>
  );
};