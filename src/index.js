import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

let myCart = [];
let myWhishList = [];

console.log("Welcome to the yout Shopee Cart!");

let item1 = await createItem("Camera 20X", 100, 3);
let item2 = await createItem("Camera 30X", 200, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWhishList, item2);

console.log("Shopee cart total is:")
cartService.getTotal(myCart);

console.log("Shopee wish list total is:")
cartService.getTotal(myWhishList);

console.log(myCart);
myCart = await cartService.deleteItem(myCart, "Camera 30X");
myCart = await cartService.deleteItem(myCart, "Camera 20X");
console.log(myCart);

await cartService.addItem(myCart, item1);

myCart = await cartService.removeItem(myCart, "Camera 20X");
myCart = await cartService.removeItem(myCart, "Camera 20X");
myCart = await cartService.removeItem(myCart, "Camera 20X");
myCart = await cartService.removeItem(myCart, "Camera 20X");
myCart = await cartService.removeItem(myCart, "Camera 20X");
myCart = await cartService.removeItem(myCart, "Camera 20X");
cartService.showCart(myCart);


