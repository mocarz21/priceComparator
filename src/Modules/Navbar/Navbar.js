import React, { useState } from "react";
import "./Navbar.scss";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaTv, FaCouch, FaMobileAlt, FaCamera, FaGamepad, FaBicycle, FaDumbbell, FaHome, FaTools, FaPaw, FaPuzzlePiece, FaBlender } from "react-icons/fa";
import { Link } from "react-router-dom";

const menuItems = [
  { id: "tv", label: "TV, Audio i RTV", icon: <FaTv />, subcategories: ["Telewizory", "Głośniki", "Soundbary", "Odtwarzacze Blu-ray"] },
  { id: "agd", label: "AGD", icon: <FaBlender />, subcategories: ["Pralki", "Lodówki", "Zmywarki", "Kuchenki"] },
  { id: "komputery", label: "Komputery i tablety", icon: <FaTv />, subcategories: ["Laptopy", "Tablety", "Komputery stacjonarne", "Akcesoria komputerowe"] },
  { id: "smartfony", label: "Smartfony i zegarki", icon: <FaMobileAlt />, subcategories: ["Smartfony", "Smartwatche", "Opaski fitness", "Akcesoria"] },
  { id: "foto", label: "Foto i kamery", icon: <FaCamera />, subcategories: ["Aparaty cyfrowe", "Kamery", "Drony", "Akcesoria fotograficzne"] },
  { id: "gaming", label: "Gaming", icon: <FaGamepad />, subcategories: ["Konsole", "Akcesoria", "Gry", "Fotele gamingowe"] },
  { id: "rowery", label: "Rowery i hulajnogi", icon: <FaBicycle />, subcategories: ["Rowery", "Hulajnogi elektryczne", "Akcesoria rowerowe", "Kaski"] },
  { id: "fitness", label: "Fitness i sport", icon: <FaDumbbell />, subcategories: ["Bieżnie", "Hantle", "Maty do ćwiczeń", "Akcesoria sportowe"] },
  { id: "dom", label: "Dom", icon: <FaHome />, subcategories: ["Meble", "Oświetlenie", "Dekoracje", "Tekstylia"] },
  { id: "warsztat", label: "Warsztat i ogród", icon: <FaTools />, subcategories: ["Narzędzia", "Kosiarki", "Grille", "Rośliny"] },
  { id: "zwierzeta", label: "Artykuły dla zwierząt", icon: <FaPaw />, subcategories: ["Karmy", "Zabawki", "Legowiska", "Akcesoria"] },
  { id: "zabawki", label: "Zabawki i LEGO", icon: <FaPuzzlePiece />, subcategories: ["LEGO", "Puzzle", "Gry planszowe", "Lalki"] },
];

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (id) => {
      setOpenMenu(prev => prev === id ? null : id);
  };

  return (
      <Container className="container navbar-module">
          <Row>
              <Col className="col-12">
                  <Nav className="flex-column">
                      {menuItems.map((item) => (
                          <div key={item.id} className="row menu-wrapper">
                              <div className="col menu-item" onClick={() => toggleMenu(item.id)}>
                                  <span className="menu-icon">{item.icon}</span>
                                  <span className="menu-label">{item.label}</span>
                                  <span className="menu-arrow">{openMenu === item.id ? "▲" : "▶"}</span>
                              </div>
                              <div className={`submenu ${openMenu === item.id ? "show" : ""}`}>
                                  {item.subcategories.map((sub, index) => (
                                    <Link key={index} to={`/category/${item.id}/${sub.toLowerCase().replace(/\s+/g, '-')}`} className="row col submenu-item">
                                      {sub}
                                    </Link>
                                  ))}
                              </div>
                          </div>
                      ))}
                  </Nav>
              </Col>
          </Row>
      </Container>
  );
};
