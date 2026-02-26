async function addItem(userCart, item) {
    userCart.push(item);
}

async function deleteItem(id) {

}

async function removeItem(userCart, name) {
    return userCart.filter((item) => item.name != name);
}

async function getTotal(userCart) {
    console.log(userCart.reduce((total, item) => {
        return total + item.subtotal
    }, 0));
}

async function showCart(userCart) {
    console.log("Items:")
    let itemNumber = 1
    userCart.forEach(item => {
        console.log(`--- item ${itemNumber++} ---`)
        console.log(`Name: ${item.name}`)
        console.log(`Price: R$ ${item.price}`)
        console.log(`Quantity: ${item.quantity}`)

        console.log("--------------")
    });

}

export { addItem, getTotal, removeItem, showCart };