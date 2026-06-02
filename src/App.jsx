import "./styles/App.css";
import Cart from "./components/Cart";
import FilterSort from "./components/FilterSort";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import { useState } from "react";
import Navbar from "./components/Navbar";
import productsData from "./data/products";

function App() {

  const [products] = useState(productsData);

  const [cart, setCart] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] =
  useState("all");

  const [sortOrder, setSortOrder] =
  useState("default");

  const handleAddToCart = (product) => {
  setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
  const updatedCart = [...cart];

  updatedCart.splice(index, 1);

  setCart(updatedCart);
  };

  const filteredProducts = products
  .filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  })

  .sort((a, b) => {
    if (sortOrder === "priceLow") {
      return a.price - b.price;
    }

    if (sortOrder === "priceHigh") {
      return b.price - a.price;
    }

    if (sortOrder === "nameAZ") {
      return a.name.localeCompare(b.name);
    }

    if (sortOrder === "nameZA") {
      return b.name.localeCompare(a.name);
    }

    return 0;
  });


  return (
  <div className="container">
    <Navbar cartCount={cart.length} />

    <h1>React Product App</h1>
    
    <SearchBar
     searchTerm={searchTerm}
     setSearchTerm={setSearchTerm}
    />

    <FilterSort
     selectedCategory={selectedCategory}
     setSelectedCategory={setSelectedCategory}
     sortOrder={sortOrder}
     setSortOrder={setSortOrder}
    />

    <ProductList
     products={filteredProducts}
     onAddToCart={handleAddToCart}
    />

    <Cart
     cart={cart}
     removeFromCart={removeFromCart}
    />
    
  </div>
);

}

export default App;





