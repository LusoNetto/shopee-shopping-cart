async function addItem(userCart, item) {
    userCart.push(item);
}

async function deleteItem(userCart, name) {
    let returnedUserCart = userCart.filter((item) => item.name != name);
    if (returnedUserCart.lenght > 0) {
        return returnedUserCart;
    } else {
        return [];
    }
}

async function removeItem(userCart, name) {
    let itemIndex = userCart.findIndex((item) => item.name === name)
    if (itemIndex != -1) {
        let itemToRemove = userCart[itemIndex];
        if (itemToRemove.quantity > 1) {
            console.log("--------------");
            console.log("removendo 1 de ", itemToRemove.name);
            console.log("--------------");
            itemToRemove.quantity--;
            userCart[itemIndex] = itemToRemove;
            return userCart;
        } else {
            console.log("--------------");
            console.log("deletando item ", itemToRemove.name);
            console.log("--------------");
            return deleteItem(userCart, name);
        }
    } else {
        console.log("--------------");
        console.log("Item não esta no carrinho")
        console.log("--------------");
        return userCart;
    }
}

async function getTotal(userCart) {
    console.log(userCart.reduce((total, item) => {
        return total + item.subtotal
    }, 0));
}

async function showCart(userCart) {
    if (userCart.lenght > 0) {
        let itemNumber = 1
        console.log("Items:")
        userCart.forEach(item => {
            console.log(`--- item ${itemNumber++} ---`)
            console.log(`Name: ${item.name}`)
            console.log(`Price: R$ ${item.price}`)
            console.log(`Quantity: ${item.quantity}`)

            console.log("--------------");
        })
    } else {
        console.log("--------------");
        console.log("Carrinho vazio");
        console.log("--------------");
    }


}

export { addItem, getTotal, removeItem, showCart, deleteItem };