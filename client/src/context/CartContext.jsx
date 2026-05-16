
import React, {
  createContext,
  useState,
  useEffect,
} from "react";

// CREATE CONTEXT
export const CartContext =
  createContext();

// PROVIDER
const CartProvider = ({
  children,
}) => {

  // CART STATE
  const [cartItems, setCartItems] =
    useState(() => {

      const savedCart =
        localStorage.getItem(
          "cartItems"
        );

      return savedCart
        ? JSON.parse(savedCart)
        : [];

    });

  // SAVE TO LOCAL STORAGE
  useEffect(() => {

    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  // ADD TO CART
  const addToCart = (product) => {

    const existingItem =
      cartItems.find(
        (item) =>
          item._id === product._id
      );

    if (existingItem) {

      const updatedCart =
        cartItems.map((item) =>

          item._id === product._id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item

        );

      setCartItems(updatedCart);

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }
  };

  // REMOVE
  const removeFromCart = (
    id
  ) => {

    const updatedCart =
      cartItems.filter(
        (item) =>
          item._id !== id
      );

    setCartItems(updatedCart);

  };

  // INCREASE
  const increaseQuantity = (
    id
  ) => {

    const updatedCart =
      cartItems.map((item) =>

        item._id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item

      );

    setCartItems(updatedCart);

  };

  // DECREASE
  const decreaseQuantity = (
    id
  ) => {

    const updatedCart =
      cartItems.map((item) =>

        item._id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item

      );

    setCartItems(updatedCart);

  };

  const clearCart = () => {

  setCartItems([]);

};

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >

      {children}

    </CartContext.Provider>

  );
};

export default CartProvider;