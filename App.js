import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Posters from "./Pages/Posters";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import MovieInfo from "./Sections/MovieInfo";
import { useEffect, useState } from "react";


function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (movie) => {
    setCart((prevCart) => [...prevCart, movie]);
  };

  const removeFromCart = (movieId) => {
    setCart((prevCart) => prevCart.filter((movie) => movie.id !== movieId));
  };

  const cartQuantity = cart.length;

  // Load cart from LocalStorage when the app starts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    console.log("Loaded cart from localStorage:", savedCart);
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);
  
  // Save cart to LocalStorage whenever it changes
  useEffect(() => {
    console.log("Saving cart to localStorage:", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/Posters" element={<Posters />} />
            <Route path="/movie/:id" element={<MovieInfo addToCart={addToCart} />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
