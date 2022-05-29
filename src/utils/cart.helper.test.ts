import { Cart } from "../model/cart";
import { addToCart, calculateInvoice, isValidItem } from "./cart.helper";

describe("Cart Helper", () => {
  test("addToCart with invalid item", () => {
    const cart: Cart[] = [];
    const item: Cart = { description: "", cost: 0, quantity: 0 };
    const result = addToCart(cart, item);
    expect(result).toEqual([]);
  });

  test("addToCart with valid item", () => {
    const cart: Cart[] = [];
    const item: Cart = { description: "item1", cost: 10, quantity: 2 };
    const result = addToCart(cart, item);
    expect(result).toEqual([{
        ...item
    }]);
  });

  test("calculateInvoice", () => {
    const cart: Cart[] = [
        { description: "item1", cost: 10, quantity: 1 },
        { description: "item2", cost: 5, quantity: 2 },
        { description: "item3", cost: 2, quantity: 3 },
    ];
    const result = calculateInvoice(cart);
    expect(result).toEqual(26);
  });

  it.each`
    item                                             | expected
    ${{ description: "", cost: 0, quantity: 0 }}     | ${false}
    ${{ description: "", cost: 0, quantity: 1 }}     | ${false}
    ${{ description: "", cost: 1, quantity: 0 }}     | ${false}
    ${{ description: "", cost: 1, quantity: 1 }}     | ${false}
    ${{ description: "item", cost: 1, quantity: 2 }} | ${true}
  `("isValidItem", ({ item, expected }) => {
    const result = isValidItem(item);
    expect(result).toBe(expected);
  });
});
