import React from "react";
import { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setAllPhotos(data);
      });
  }, []);

  function toggleFavourite(id) {
    // console.log("Clicked!");
    // console.log(id);
    const newArray = allPhotos.map((img) => {
      if (img.id === id) {
        return {
          ...img,
          isFavorite: !img.isFavorite,
        };
      } else {
        return img;
      }
    });

    // console.log(newArray);
    setAllPhotos(newArray);
  }

  // console.log(allPhotos);

  function addToCart(newItem) {
    // console.log("Clicked!");
    setCartItems((prevItems) => [...prevItems, newItem]);
  }

  function removeFromCart(img) {
    console.log("Removed from the cart!");
    const newArray = cartItems.filter((item) => {
      return item.id !== img.id;
    });
    setCartItems(newArray);
  }

  function emptyCart() {
    setCartItems([]);
  }

  console.log(cartItems);

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavourite,
        addToCart,
        cartItems,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
