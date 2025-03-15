import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaTv, FaBlender, FaMobileAlt, FaCamera, FaGamepad, FaBicycle, FaDumbbell, FaTools, FaPaw, FaPuzzlePiece } from "react-icons/fa";

const menuItems = [
  { id: "tv", label: "TV, Audio i RTV", icon: <FaTv />, subcategories: ["telewizory", "głosniki", "soundbary", "odtwarzacze-blu-ray"] },
  { id: "agd", label: "AGD", icon: <FaBlender />, subcategories: ["pralki", "lodowki", "zmywarki", "kuchenki"] },
  { id: "komputery", label: "Komputery i tablety", icon: <FaTv />, subcategories: ["laptopy", "tablety", "komputery-stacjonarne", "akcesoria-komputerowe"] },
  { id: "smartfony", label: "Smartfony i zegarki", icon: <FaMobileAlt />, subcategories: ["smartfony", "smartwatche", "opaski-fitness", "akcesoria"] },
  { id: "foto", label: "Foto i kamery", icon: <FaCamera />, subcategories: ["aparaty-cyfrowe", "kamery", "drony", "akcesoria-fotograficzne"] },
  { id: "gaming", label: "Gaming", icon: <FaGamepad />, subcategories: ["konsole", "akcesoria", "gry", "fotele-gamingowe"] },
  { id: "rowery", label: "Rowery i hulajnogi", icon: <FaBicycle />, subcategories: ["rowery", "hulajnogi-elektryczne", "akcesoria-rowerowe", "kaski"] },
  { id: "fitness", label: "Fitness i sport", icon: <FaDumbbell />, subcategories: ["bieżnie", "hantle", "maty-do-ćwiczeń", "akcesoria-sportowe"] },
  { id: "warsztat", label: "Warsztat i ogród", icon: <FaTools />, subcategories: ["narzędzia", "kosiarki", "grille", "rosliny"] },
  { id: "zwierzeta", label: "Artykuły dla zwierząt", icon: <FaPaw />, subcategories: ["karmy", "zabawki", "legowiska", "akcesoria"] },
  { id: "zabawki", label: "Zabawki i LEGO", icon: <FaPuzzlePiece />, subcategories: ["lego", "puzzle", "gry-planszowe", "lalki"] },
];

export const Breadcrumbs = () => {
  const location = useLocation();
  const [crumbs, setCrumbs] = useState([]);

  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    let breadcrumbPath = [];
    
    pathSegments.forEach((segment, index) => {
      const parentCategory = menuItems.find(item => item.id === segment);
      if (parentCategory) {
        breadcrumbPath.push({
          id: parentCategory.id,
          label: parentCategory.label,
          icon: parentCategory.icon,
          path: `/category/${parentCategory.id}`,
        });
      } else {
        // Sprawdzenie, czy segment jest podkategorią
        const foundParent = menuItems.find(item => item.subcategories.includes(segment));
        if (foundParent) {
          breadcrumbPath.push({
            id: segment,
            label: segment.replace("-", " "),
            icon: null,
            path: `/category/${foundParent.id}/${segment}`,
          });
        }
      }
    });
    
    setCrumbs(breadcrumbPath);
  }, [location]);

  return (
    <div className="container">
      <div className="row breadcrumbs align-items-center py-2">
        <div className="col">
          <nav className="d-flex align-items-center">
            <Link to="/" className="text-dark d-flex align-items-center">
              <FaHome className="me-1" />
            </Link>
            {crumbs.map((crumb, index) => (
              <div key={index} className="d-flex align-items-center">
                <span className="mx-2">›</span>
                {index === crumbs.length - 1 ? (
                  <span className="text-secondary">{crumb.label}</span>
                ) : (
                  <Link to={crumb.path} className="text-dark text-decoration-none d-flex align-items-center">
                    {crumb.icon && <span className="me-1">{crumb.icon}</span>} {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

