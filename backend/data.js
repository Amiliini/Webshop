import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Mari",
      email: "mari@jossain.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Terttu",
      email: "terttu@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Dino",
      category: "Animals",
      image: "/images/p1.jpg",
      price: 2,
      countInStock: 10,
      brand: "JurassicToys",
      rating: 3.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Duck",
      category: "Animals",
      image: "/images/p2.jpg",
      price: 66,
      countInStock: 15,
      brand: "RubberFactory",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Bunny",
      category: "Animals",
      image: "/images/p3.jpg",
      price: 12,
      countInStock: 8,
      brand: "Mum",
      rating: 4.8,
      numReviews: 17,
      description: "high quality product",
    },
    {
      name: "Kitty",
      category: "Animals",
      image: "/images/p4.jpg",
      price: 12,
      countInStock: 78,
      brand: "Mum",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      name: "Broccoli",
      category: "Vegetables",
      image: "/images/p5.jpg",
      price: 1.5,
      countInStock: 13,
      brand: "FreeRangers",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Rubiks cube",
      category: "Games",
      image: "/images/p6.jpg",
      price: 14.5,
      countInStock: 305,
      brand: "Spin Masters",
      rating: 4.5,
      numReviews: 15,
      description: "high quality product",
    },
    {
      name: "Teddy",
      category: "Animals",
      image: "/images/p7.jpg",
      price: 8,
      countInStock: 0,
      brand: "Mum",
      rating: 4.5,
      numReviews: 15,
      description: "high quality product",
    },
    {
      name: "Bear",
      category: "Animals",
      image: "/images/p8.jpg",
      price: 12,
      countInStock: 103,
      brand: "Mum",
      rating: 4.5,
      numReviews: 15,
      description: "high quality product",
    },
  ],
};
export default data;
