import pizza from "./assets/pizza.jpg";
import pasta from "./assets/pasta.jpg";
import samasa from "./assets/samosa.jpg";
import burger from "./assets/burger.jpg";
import cake from "./assets/cake.jpg";
import momos from "./assets/momos.jpg";

const foodData = [
  {
    id: 1,
    foodName: "Pizza",
    foodInfo: "Pizza is a delicious, cheesy delight, perfect for any meal, loved by all ages.",
    foodImg: pizza,
    foodType:"lunch",
    price: "$10.00"
  },
  {
    id: 2,
    foodName: "Burger",
    foodInfo: "Burger is a delicious, savory sandwich with juicy patties, toppings, satisfying every bite.",
    foodImg: burger,
    foodType:"breakfast",
    price: "$8.00"
  },
  {
    id: 3,
    foodName: "Samosa",
    foodInfo: "Samosa is a crispy, triangular pastry filled with spicy potatoes, perfect for a tasty snack.",
    foodImg: samasa,
    foodType:"dinner",
    price: "$5.00"
  },
  {
    id: 4,
    foodName: "Momos",
    foodInfo: "Momos are steamed, soft dumplings filled with savory stuffing, perfect for a delicious bite.",
    foodImg: momos,
    foodType:"breakfast",
    price: "$12.00"
  },
  {
    id: 5,
    foodName: "Pasta",
    foodInfo: "Pasta is a versatile, comforting dish with various shapes, sauces, and flavors, loved by many.",
    foodImg: pasta,
    foodType:"lunch",
    price: "$15.00"
  },
  {
    id: 6,
    foodName: "Cake",
    foodInfo: "Cake is a sweet, layered dessert, often frosted, perfect for celebrations and indulgence.",
    foodImg: cake,
    foodType:"dinner",
    price: "$20.00"
  }
];

export default foodData;