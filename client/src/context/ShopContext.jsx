/*
import { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets"; 


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [productsList, setProductsList] = useState([]);
  const currency = '$';
  const delivery_fee = 10;

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  // Add to cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
  };


  // Decrease cart quantity 
  const decreaseCart = (itemId) => {
    const cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId] > 1) {
        cartData[itemId] -= 1;
      } else {
        delete cartData[itemId];
      }
      setCartItems(cartData);
    }
  };

  // Remove item from cart 
  const removeFromCart = (itemId) => {
    const cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      delete cartData[itemId];
      setCartItems(cartData);
    }
  };

  // Get total count of all cart items
  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {
      try {
        totalCount += cartItems[itemId];
      } catch (error) {
        console.error("Error counting cart items:", error);
      }
    }

    return totalCount;
  };

  useEffect(() => {
    console.log('Cart Items:', cartItems);
  }, [cartItems]);

  useEffect(() => {
    setProductsList(products);
  }, []);

  const value = {
    products: productsList,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    decreaseCart,
    removeFromCart,
    getCartCount,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
*/


import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [productsList, setProductsList] = useState([]);
  const currency = '$';
  const delivery_fee = 10;

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  // Add to cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
  };

  // Decrease cart quantity 
  const decreaseCart = (itemId) => {
    const cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId] > 1) {
        cartData[itemId] -= 1;
      } else {
        delete cartData[itemId];
      }
      setCartItems(cartData);
    }
  };

  // Remove item from cart 
  const removeFromCart = (itemId) => {
    const cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      delete cartData[itemId];
      setCartItems(cartData);
    }
  };

  // Get total count of all cart items
  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {
      try {
        totalCount += cartItems[itemId];
      } catch (error) {
        console.error("Error counting cart items:", error);
      }
    }

    return totalCount;
  };

  useEffect(() => {
    console.log('Cart Items:', cartItems);
  }, [cartItems]);

  // <-- Updated: fetch products from backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");  
        const data = await res.json();
        setProductsList(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };

    fetchProducts();
  }, []);

  const value = {
    products: productsList,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    decreaseCart,
    removeFromCart,
    getCartCount,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

