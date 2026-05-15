
import React, {
  createContext,
  useState,
  useEffect,
} from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {

    const savedCart =
      localStorage.getItem("cartItems");

    return savedCart
      ? JSON.parse(savedCart)
      : [];

  });

  useEffect(() => {

    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  // ADD TO CART

  const addToCart = (product) => {

    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    // IF PRODUCT ALREADY EXISTS

    if (existingItem) {

      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCartItems(updatedCart);

    } else {

      // ADD NEW PRODUCT

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }
  };

  // REMOVE FROM CART

  const removeFromCart = (id) => {

    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);

  };

  // INCREASE QUANTITY

  const increaseQuantity = (id) => {

    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    setCartItems(updatedCart);

  };

  // DECREASE QUANTITY

  const decreaseQuantity = (id) => {

    const updatedCart = cartItems.map((item) =>
      item.id === id
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

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

// import React, {
//   createContext,
//   useState,
//   useEffect,
// } from "react";

// export const CartContext = createContext();

// function CartProvider({ children }) {

//   // LOAD CART FROM LOCAL STORAGE
//   const [cartItems, setCartItems] = useState(() => {

//     const savedCart =
//       localStorage.getItem("cartItems");

//     return savedCart
//       ? JSON.parse(savedCart)
//       : [];

//   });

//   // SAVE CART TO LOCAL STORAGE
//   useEffect(() => {

//     localStorage.setItem(
//       "cartItems",
//       JSON.stringify(cartItems)
//     );

//   }, [cartItems]);

//   // ADD TO CART
//   const addToCart = (product) => {

//     const existingItem = cartItems.find(
//       (item) => item._id === product._id
//     );

//     // IF PRODUCT ALREADY EXISTS
//     if (existingItem) {

//       const updatedCart = cartItems.map((item) =>

//         item._id === product._id
//           ? {
//               ...item,
//               quantity: item.quantity + 1,
//             }
//           : item

//       );

//       setCartItems(updatedCart);

//     } else {

//       // ADD NEW PRODUCT
//       setCartItems([
//         ...cartItems,
//         {
//           ...product,
//           quantity: 1,
//         },
//       ]);

//     }
//   };

//   // REMOVE FROM CART
//   const removeFromCart = (id) => {

//     const updatedCart = cartItems.filter(
//       (item) => item._id !== id
//     );

//     setCartItems(updatedCart);

//   };

//   // INCREASE QUANTITY
//   const increaseQuantity = (id) => {

//     const updatedCart = cartItems.map((item) =>

//       item._id === id
//         ? {
//             ...item,
//             quantity: item.quantity + 1,
//           }
//         : item

//     );

//     setCartItems(updatedCart);

//   };

//   // DECREASE QUANTITY
//   const decreaseQuantity = (id) => {

//     const updatedCart = cartItems.map((item) =>

//       item._id === id
//         ? {
//             ...item,
//             quantity:
//               item.quantity > 1
//                 ? item.quantity - 1
//                 : 1,
//           }
//         : item

//     );

//     setCartItems(updatedCart);

//   };

//   // CLEAR CART
//   const clearCart = () => {

//     setCartItems([]);

//   };

//   // TOTAL ITEMS
//   const totalItems = cartItems.reduce(
//     (acc, item) => acc + item.quantity,
//     0
//   );

//   // TOTAL PRICE
//   const totalPrice = cartItems.reduce(
//     (acc, item) =>
//       acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         increaseQuantity,
//         decreaseQuantity,
//         clearCart,
//         totalItems,
//         totalPrice,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export default CartProvider;