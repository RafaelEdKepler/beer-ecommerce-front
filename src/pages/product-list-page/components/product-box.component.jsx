import React from "react";
import { Plus } from "@phosphor-icons/react";
import { ButtonAddToCart, ProductBoxContainer } from "./style";

export default function ProductBoxComponent({
  brand,
  image,
  price,
  id,
  onClick
}) {
  return (
    <ProductBoxContainer
      onClick={() => onClick(id)}
    >
      <h3>{brand}</h3>
      <img alt={`Photo of ${brand} beer`} src={image} />
      <div>
        <span>{price}</span>
        <ButtonAddToCart onClick={() => window.alert('Added to cart')}>
          <Plus />
        </ButtonAddToCart>
      </div>
    </ProductBoxContainer>
  )
}