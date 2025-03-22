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