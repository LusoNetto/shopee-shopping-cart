import createItem from "./services/item.js";
import createCart from "./services/cart.js";

console.log("Welcome to the yout Shopee Cart!");

let item1 = await createItem("Camera 20X", 299, 3);
let item2 = await createItem("Camera 30X", 599, 3);

let cart = createCart;


