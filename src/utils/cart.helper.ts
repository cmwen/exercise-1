import { Cart } from "../model/cart";

export const addToCart = (cart: Cart[], item: Cart) => {
  if (isValidItem(item)) {
    const existingItem = cart.find((i) => i.description === item.description);
    if (existingItem) {
      return cart.map((i) =>
        i.description === item.description
          ? { ...i, quantity: i.quantity + item.quantity }
          : i
      );
    }
    return [...cart, item];
  } else {
    return cart;
  }
};

export const calculateInvoice = (cart: Cart[]) => {
  return cart.reduce((acc, cur) => acc + cur.cost * cur.quantity, 0);
};

export const isValidItem = (item: Cart): boolean => {
  return item.description.length > 0 && item.cost > 0 && item.quantity > 0;
};
