import { Plus } from "@phosphor-icons/react";
import { ButtonAddToCart, ProductBoxContainer } from "./style";
import Budweiser from "../../../assets/budweiser.png";

export default function ProductBoxComponent() {
  return (
    <ProductBoxContainer>
      <h3>Modelo Especial</h3>
      <img src={Budweiser} />
      <div>
        <span>$28.65</span>
        <ButtonAddToCart>
          <Plus />
        </ButtonAddToCart>
      </div>
    </ProductBoxContainer>
  )
}