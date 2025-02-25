import { createContext, useState } from "react";
import PropTypes from "prop-types";
import all_products from "../assets/all_products.js";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  // console.log("Context all_products:", all_products); // Add this log

  const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length + 1; index++) {
      cart[index] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
    console.log(cartItems);
  }
  
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  }
  
  const contextValue = {
    all_products: all_products || [], // Provide a default empty array
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
