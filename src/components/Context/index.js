import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export function ContextProvider(props) {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Nike Shoes 01",
      src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
      description: "UI/UX designing, html css tutorials",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: "23",
      colors: ["red", "black", "crimson", "teal"],
      count: 1,
    },

    {
      _id: "2",
      title: "Nike Shoes 02",
      src: "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
      description: "UI/UX designing, html css tutorials",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: "19",
      colors: ["red", "crimson", "teal"],
      count: 1,
    },
    {
      _id: "3",
      title: "Nike Shoes 03",
      src: "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
      description: "UI/UX designing, html css tutorials",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: "50",
      colors: ["lightblue", "white", "crimson", "teal"],
      count: 1,
    },
    {
      _id: "4",
      title: "Nike Shoes 04",
      src: "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
      description: "UI/UX designing, html css tutorials",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: "15",
      colors: ["orange", "black", "crimson", "teal"],
      count: 1,
    },
    {
      _id: "5",
      title: "Nike Shoes 05",
      src: "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
      description: "UI/UX designing, html css tutorials",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: "10",
      colors: ["orange", "black", "crimson", "teal"],
      count: 1,
    },
    {
      _id: "6",
      title: "Nike Shoes 06",
      src: "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
      description: "UI/UX designing, html css tutorials",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: "17",
      colors: ["orange", "black", "crimson", "teal"],
      count: 1,
    },
  ]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function addCart(id) {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
    }
  }

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
    total: [total, setTotal],
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}
