import React from "react";
import * as Styled from "./AddToCartPage.styles";
import * as StyledForm from "../components/Form.styles";
import CartList from "../components/CartList";
import { Cart } from "../model/cart";
import { addToCart, calculateInvoice } from "../utils/cart.helper";

export default function AddToCartPage() {
  const [carts, setCarts] = React.useState<Cart[]>([]);
  const [description, setDescription] = React.useState("");
  const [cost, setCost] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);

  const handleAddItem = () => {
    const newCarts = addToCart(carts, { description, cost, quantity });
    setCarts(newCarts);
  };

  const handleSubmit = () => {
    console.log(carts);
  }

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
        <StyledForm.Button onClick={handleAddItem}>Add Item</StyledForm.Button>
      </Styled.ActionBar>
      <CartList carts={carts} />
      <div>
        Total: <span>{calculateInvoice(carts)}</span>
      </div>
      <StyledForm.Button onClick={handleSubmit}>Submit invoices</StyledForm.Button>
    </Styled.PageWrapper>
  );
}
