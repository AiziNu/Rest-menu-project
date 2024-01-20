import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { fetchData } from "./utilis/getData";
import Menu from "./components/Menu";
import NavMenu from "./components/NavMenu";
import Categories from "./components/Categories";
import Card from "./components/Card";

export default function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cart, setCart] = useState([]);

  console.log(menuItems);

  useEffect(() => {
    fetchData().then((data) => {
      setMenuItems(data);
      setFilteredItems(data);
    });
  }, []);

  const allCategories = [
    "all",
    ...new Set(menuItems.map((item) => item.category)),
  ];
  console.log(allCategories);

  const filterMenu = (category) => {
    let filteredMenu;
    if (category === "all") {
      filteredMenu = menuItems;
    } else {
      filteredMenu = menuItems.filter((item) => item.category === category);
    }
    setFilteredItems(filteredMenu);
    console.log(menuItems);
  };

  const addToCart = (id) => {
    const newOrder = menuItems.find((item) => item.id === id);
    setCart([...cart, newOrder]);
  };

  return (
    <div className="App">
      <NavMenu isCardOpen={isCardOpen} setIsCardOpen={setIsCardOpen} />
      {isCardOpen ? (
        <Card cart={cart} />
      ) : (
        <section className="menu-list">
          <Categories allCategories={allCategories} filterMenu={filterMenu} />
          <Menu filteredItems={filteredItems} addToCart={addToCart} />
        </section>
      )}
    </div>
  );
}
