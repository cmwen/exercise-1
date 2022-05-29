import React from "react";
import { Cart } from "../model/cart";
import * as Styled from "./CartList.styles";

interface CartListProps {
  carts: Cart[];
}

export default function CartList({ carts }: CartListProps) {
  return (
    <Styled.Table>
      <tbody>
      <Styled.TableRow>
        <Styled.TableHeader>Description</Styled.TableHeader>
        <Styled.TableHeader>Cost</Styled.TableHeader>
        <Styled.TableHeader>Quantity</Styled.TableHeader>
        <Styled.TableHeader>Price</Styled.TableHeader>
      </Styled.TableRow>
      {carts.map((cart) => (
        <Styled.TableRow key={cart.description}>
          <Styled.TableCell>{cart.description}</Styled.TableCell>
          <Styled.TableCell>$ {cart.cost}</Styled.TableCell>
          <Styled.TableCell>{cart.quantity}</Styled.TableCell>
          <Styled.TableCell>$ {cart.cost * cart.quantity}</Styled.TableCell>
        </Styled.TableRow>
      ))}
      </tbody>
    </Styled.Table>
  );
}
