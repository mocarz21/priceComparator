import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaTv,
  FaBlender,
  FaMobileAlt,
  FaCamera,
  FaGamepad,
  FaBicycle,
  FaDumbbell,
  FaTools,
  FaPaw,
  FaPuzzlePiece
} from "react-icons/fa";

// Przykładowe definicje głównych kategorii i ich subkategorii.
// Każda ma pole `id` (krótka nazwa w URL), `label` (wyświetlana w breadcrumb),
// ikonę i tablicę subkategorii, które pokrywają się z segmentami w URL.
const menuItems = [
  {
    id: "tv",
    label: "TV, Audio i RTV",
    icon: <FaTv />,
    subcategories: ["telewizory", "głośniki", "soundbary", "odtwarzacze-blu-ray"]
  },
  {
    id: "agd",
    label: "AGD",
    icon: <FaBlender />,
    subcategories: ["pralki", "lodowki", "zmywarki", "kuchenki"]
  },
  {
    id: "komputery",
    label: "Komputery i tablety",
    icon: <FaTv />,
    subcategories: ["laptopy", "tablety", "komputery-stacjonarne", "akcesoria-komputerowe"]
  },
  {
    id: "smartfony",
    label: "Smartfony i zegarki",
    icon: <FaMobileAlt />,
    subcategories: ["smartfony", "smartwatche", "opaski-fitness", "akcesoria"]
  },
  {
    id: "foto",
    label: "Foto i kamery",
    icon: <FaCamera />,
    subcategories: ["aparaty-cyfrowe", "kamery", "drony", "akcesoria-fotograficzne"]
  },
  {
    id: "gaming",
    label: "Gaming",
    icon: <FaGamepad />,
    subcategories: ["konsole", "akcesoria", "gry", "fotele-gamingowe"]
  },
  {
    id: "rowery",
    label: "Rowery i hulajnogi",
    icon: <FaBicycle />,
    subcategories: ["rowery", "hulajnogi-elektryczne", "akcesoria-rowerowe", "kaski"]
  },
  {
    id: "fitness",
    label: "Fitness i sport",
    icon: <FaDumbbell />,
    subcategories: ["bieżnie", "hantle", "maty-do-ćwiczeń", "akcesoria-sportowe"]
  },
  {
    id: "warsztat",
    label: "Warsztat i ogród",
    icon: <FaTools />,
    subcategories: ["narzędzia", "kosiarki", "grille", "rosliny"]
  },
  {
    id: "zwierzeta",
    label: "Artykuły dla zwierząt",
    icon: <FaPaw />,
    subcategories: ["karmy", "zabawki", "legowiska", "akcesoria"]
  },
  {
    id: "zabawki",
    label: "Zabawki i LEGO",
    icon: <FaPuzzlePiece />,
    subcategories: ["lego", "puzzle", "gry-planszowe", "lalki"]
  }
];

// Komponent Breadcrumbs
// Oczekuje opcjonalnego propsa `productName` (string), żeby dodać ostatni "okruszek" z nazwą produktu.
export const Breadcrumbs = ({ productName }) => {
  const location = useLocation();
  const [crumbs, setCrumbs] = useState([]);

  useEffect(() => {
    // Rozbijamy aktualną ścieżkę na segmenty:
    // np. "/category/smartfony/smartfony/1" -> ["category", "smartfony", "smartfony", "1"]
    const pathSegments = location.pathname.split("/").filter(Boolean);

    // Tablica, w której będziemy trzymać kolejne elementy breadcrumbu.
    let breadcrumbPath = [];

    // Zacznijmy pętlę od segmentu, który faktycznie jest kategorią (pomijamy "category").
    let startIndex = 0;
    if (pathSegments[0] === "category") {
      startIndex = 1;
    }

    // Przechodzimy po segmentach i sprawdzamy, czy pasują do kategorii / subkategorii
    for (let i = startIndex; i < pathSegments.length; i++) {
      const segment = pathSegments[i];

      // 1) Czy segment to ID głównej kategorii (np. "smartfony")?
      const foundCategory = menuItems.find(item => item.id === segment);
      if (foundCategory) {
        breadcrumbPath.push({
          id: foundCategory.id,
          label: foundCategory.label,
          icon: foundCategory.icon,
          path: `/category/${foundCategory.id}`
        });
        continue;
      }

      // 2) Czy segment to subkategoria? (np. "smartfony", "telewizory" itp.)
      //    Znajdź taką główną kategorię, która ma w subcategories ten segment.
      const foundParent = menuItems.find(item => item.subcategories.includes(segment));
      if (foundParent) {
        breadcrumbPath.push({
          id: segment,
          // W razie potrzeby można tu formatować nazwy subkategorii:
          label: segment.replace("-", " "),
          icon: null,
          path: `/category/${foundParent.id}/${segment}`
        });
        continue;
      }

      // 3) Jeśli to ID produktu (np. "1", "2", "345" itp.) lub "slug",
      //    i mamy `productName` od rodzica, to dodajemy go jako ostatni crumb.
      if (productName && /^\d+$/.test(segment)) {
        breadcrumbPath.push({
          id: segment,
          label: productName,
          icon: null,
          path: location.pathname
        });
        continue;
      }

      // Jeśli masz inny format slugów produktu (np. "telewizor-xyz"),
      // też możesz go tu obsłużyć, np.:
      // if (productName && !foundCategory && !foundParent) { ... }
    }

    setCrumbs(breadcrumbPath);
  }, [location, productName]);

  return (
    <div className="container">
      <div className="row breadcrumbs align-items-center py-2">
        <div className="col">
          <nav className="d-flex align-items-center">
            {/* Domek (link na stronę główną) */}
            <Link to="/" className="text-dark d-flex align-items-center">
              <FaHome className="me-1" />
            </Link>

            {/* Kolejne okruszki */}
            {crumbs.map((crumb, index) => (
              <div key={index} className="d-flex align-items-center">
                <span className="mx-2">›</span>
                {index === crumbs.length - 1 ? (
                  <span className="text-secondary">{crumb.label}</span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="text-dark text-decoration-none d-flex align-items-center"
                  >
                    {crumb.icon && <span className="me-1">{crumb.icon}</span>}
                    {crumb.label}
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
