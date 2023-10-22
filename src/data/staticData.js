import imageSlider1 from "../assets/slider1.jpg";
import imageSlider2 from "../assets/slider2.jpg";
import imageSlider3 from "../assets/slider3.jpg";
import imageSlider4 from "../assets/slider4.jpg";

import categoryImage1 from "../assets/Baked.png";
import categoryImage2 from "../assets/Burger.png";
import categoryImage3 from "../assets/Chicken.png";
import categoryImage4 from "../assets/Coffee.png";
import categoryImage5 from "../assets/Fast.png";
import categoryImage6 from "../assets/Fish.png";

import teamImage1 from "../assets/manager.jpg";
import teamImage2 from "../assets/chef-1.jpg";
import teamImage3 from "../assets/chef2.jpg";

// import burger from "../assets/product/dish_06.png";
// import pizza from "../assets/product/our-story.png";
// import drink from "../assets/product/d1.png";
// import iceCream from "../assets/product/i1.png";
// import fish from "../assets/product/fi2.png";

export const headerLinks = [
  {
    id: 1,
    title: "Home",
    to: "/",
  },

  {
    id: 2,
    title: "Menu",
    to: "/menu",
  },

  {
    id: 3,
    title: "About US",
    to: "/about",
  },

  {
    id: 4,
    title: "Services",
    to: "/services",
  },
];

export const loginFormData = [
  {
    id: 1,
    title: "Email",
    name: "email",
    type: "text",
  },
  {
    id: 2,
    title: "Password",
    name: "password",
    type: "password",
  },
];

export const sliderImages = [
  imageSlider1,
  imageSlider2,
  imageSlider3,
  imageSlider4,
];

export const categoryDta = [
  {
    id: 1,
    img: categoryImage1,
  },

  {
    id: 2,
    img: categoryImage2,
  },

  {
    id: 3,
    img: categoryImage3,
  },

  {
    id: 4,
    img: categoryImage4,
  },

  {
    id: 5,
    img: categoryImage5,
  },

  {
    id: 6,
    img: categoryImage6,
  },
];

// export const productData = [
//   {
//     id: 1,
//     title: "This Is Title",
//     image: burger,
//     qty: 1,
//     category: "burger",
//   },
//   {
//     id: 2,
//     title: "This Is Title",
//     image: burger,
//     category: "burger",
//     qty: 1,
//   },

//   {
//     id: 3,
//     title: "This Is Title",
//     image: burger,
//     category: "burger",
//     qty: 1,
//   },

//   {
//     id: 4,
//     title: "This Is Title",
//     image: burger,
//     category: "burger",
//     qty: 1,
//   },

//   {
//     id: 5,
//     title: "This Is Title",
//     image: pizza,
//     category: "pizza",
//     qty: 1,
//   },

//   {
//     id: 6,
//     title: "This Is Title",
//     image: pizza,
//     category: "pizza",
//     qty: 1,
//   },

//   {
//     id: 7,
//     title: "This Is Title",
//     image: pizza,
//     category: "pizza",
//   },

//   {
//     id: 8,
//     title: "This Is Title",
//     image: pizza,
//     category: "pizza",
//   },

//   {
//     id: 9,
//     title: "This Is Title",
//     image: drink,
//     category: "drink",
//   },

//   {
//     id: 10,
//     title: "This Is Title",
//     image: drink,
//     category: "drink",
//   },

//   {
//     id: 11,
//     title: "This Is Title",
//     image: drink,
//     category: "drink",
//   },

//   {
//     id: 12,
//     title: "This Is Title",
//     image: drink,
//     category: "drink",
//   },

//   {
//     id: 13,
//     title: "This Is Title",
//     image: iceCream,
//     category: "iceCream",
//   },

//   {
//     id: 14,
//     title: "This Is Title",
//     image: iceCream,
//     category: "iceCream",
//   },

//   {
//     id: 15,
//     title: "This Is Title",
//     image: iceCream,
//     category: "iceCream",
//   },

//   {
//     id: 16,
//     title: "This Is Title",
//     image: iceCream,
//     category: "iceCream",
//   },

//   {
//     id: 17,
//     title: "This Is Title",
//     image: fish,
//     category: "fish",
//   },

//   {
//     id: 18,
//     title: "This Is Title",
//     image: fish,
//     category: "fish",
//   },

//   {
//     id: 19,
//     title: "This Is Title",
//     image: fish,
//     category: "fish",
//   },

//   {
//     id: 20,
//     title: "This Is Title",
//     image: fish,
//     category: "fish",
//   },
// ];

export const categoryData = [
  {
    id: 1,
    title: "All",
    category: "all",
    qty: 1,
  },

  {
    id: 2,
    title: "Burger",
    category: "burger",
    qty: 1,
  },

  {
    id: 3,
    title: "Pizza",
    category: "pizza",
    qty: 1,
  },

  {
    id: 4,
    title: "Fish",
    category: "fish",
    qty: 1,
  },

  {
    id: 5,
    title: "Ice Cream",
    category: "iceCream",
    qty: 1,
  },

  {
    id: 6,
    title: "Drinks",
    category: "drink",
    qty: 1,
  },
];

export const ourTeamData = [
  { id: 1, image: teamImage1, name: "William Smith", title: "Manager" },
  { id: 2, image: teamImage2, name: "John Doe", title: "Chef" },
  { id: 3, image: teamImage3, name: "Bradd  L.", title: "Chef" },
];
