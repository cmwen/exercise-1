import React from "react";
import * as Styled from "./AddToCartPage.styles";
import * as StyledForm from "../components/Form.styles";
import CartList from "../components/CartList";
import { Cart } from "../model/cart";
import { addToCart, calculateInvoice, isValidItem } from "../utils/cart.helper";

export default function AddToCartPage() {
  const [carts, setCarts] = React.useState<Cart[]>([]);
  const [description, setDescription] = React.useState("");
  const [cost, setCost] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);

  const handleAddItem = () => {
    const newCarts = addToCart(carts, { description, cost, quantity });
    setCarts(newCarts);
    setDescription("");
    setCost(0);
    setQuantity(0);
  };

  const handleSubmit = () => {
    console.log(carts);
  };

  return (
    <Styled.PageWrapper>
      <Styled.ActionBar>
        <StyledForm.Group>
          <StyledForm.Label>Description</StyledForm.Label>
          <StyledForm.Input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </StyledForm.Group>
        <StyledForm.Group>
          <StyledForm.Label>Cost</StyledForm.Label>
          <StyledForm.Input
            type="number"
            name="cost"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
          />
        </StyledForm.Group>

        <StyledForm.Group>
          <StyledForm.Label>Quantity</StyledForm.Label>
          <StyledForm.Input
            type="number"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </StyledForm.Group>
        <StyledForm.Button
          onClick={handleAddItem}
          disabled={!isValidItem({ description, cost, quantity })}
        >
          Add Item
        </StyledForm.Button>
      </Styled.ActionBar>
      <CartList carts={carts} />
      <Styled.FlexEnd>
        Total: <span>$ {calculateInvoice(carts)}</span>
      </Styled.FlexEnd>
      <Styled.FlexEnd>
        <StyledForm.Button onClick={handleSubmit} disabled={carts.length === 0}>
          Submit invoices
        </StyledForm.Button>
      </Styled.FlexEnd>
    </Styled.PageWrapper>
  );
}
