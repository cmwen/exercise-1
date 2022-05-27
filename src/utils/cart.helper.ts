import { Cart } from "../model/cart";

export const addToCart = (cart: Cart[], item: Cart) => {
    const existingItem = cart.find(i => i.description === item.description);
    if (existingItem) {
        return cart.map(i => i.description === item.description ? { ...i, quantity: i.quantity + item.quantity } : i);
    }   
    return [...cart, item];
}

export const calculateInvoice = (cart: Cart[]) => {
    return cart.reduce((acc, cur) => acc + cur.cost * cur.quantity, 0);
}
