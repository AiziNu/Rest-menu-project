import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Product } from "./Product";
import { NavComponent } from "./NavComponent";

function App() {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  // const [categories, setCategories] = useState([]);

  console.log(favorites);

  useEffect(() => {
    fetchProducts();
    // handleCategories();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  const toogleFavorites = (productId) => {
    const ifExists = favorites.some((product) => product.id === productId);
    if (ifExists) {
      const newFavorites = favorites.filter(
        (product) => product.id !== productId
      );
      setFavorites(newFavorites);
    } else {
      const newFavorites = products.find((product) => product.id === productId);
      setFavorites([...favorites, newFavorites]);
    }
  };

  // function handleCategories() {
  //   const arr = [];
  //   for (let product of products) {
  //     if (!arr.includes(product.category)) arr.push(product.category);
  //   }
  //   setCategories(arr);
  // }
  return (
    <div className="App">
      <div className="navbar-wrapper">
        <NavComponent products={products} />
      </div>
      <div className="products-wrapper">
        {products.map((product) => (
          <Product
            {...product}
            toogleFavorites={toogleFavorites}
            favorites={favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
