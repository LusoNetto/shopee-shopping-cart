async function createCart(itens) {
    return {itens}
}

async function addItem(cart, item) {
    itens.push(item);
}

async function deleteItem(id) {

}

async function removeItem(id) {

}

async function getTotal(itens) {
    return itens.reduce((total, item)=>{
        total + item.subtotal()
    }, 0);
}

export default {addItem, getTotal, removeItem};