import { Plus } from "@phosphor-icons/react";
import { ButtonAddToCart, ProductBoxContainer } from "./style";
import Budweiser from "../../../assets/budweiser.png";

export default function ProductBoxComponent({
  brand,
  image,
  price
}) {
  return (
    <ProductBoxContainer>
      <h3>{brand}</h3>
      <img src={image} />
      <div>
        <span>{price}</span>
        <ButtonAddToCart>
          <Plus />
        </ButtonAddToCart>
      </div>
    </ProductBoxContainer>
  )
}