import { BagIcon, CartComponentContainer } from "./style";

export default function AddToCartComponent() {
  return (
    <CartComponentContainer>
      <BagIcon>
        <Handbag />
      </BagIcon>
      <button>
        Add to cart
      </button>
    </CartComponentContainer>
  )
}