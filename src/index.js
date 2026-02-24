import createItem from "./services/item.js";

console.log("Welcome to the yout Shopee Cart!");

let item1 = await createItem("Camera 20X", 299, 3);
let item2 = await createItem("Camera 30X", 599, 3);

console.log(item1);
console.log(item2.subtotal);
