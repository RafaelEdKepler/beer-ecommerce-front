import { Handbag } from "@phosphor-icons/react";
import { BagIcon, CartComponentContainer } from "./style";
import { useTranslation } from "react-i18next";

export default function AddToCartComponent() {

  const { t } = useTranslation("product-details");

  /*
  "product-details": {
    "add-to-cart": "Add to cart",
    "origin": "Origin: ",
    "stock": "Stock",
    "description": "Description",
    "see-less": "See less",
    "read-more": "Read more",
    "size": "Size"
  }
  */


  return (
    <CartComponentContainer>
      <BagIcon>
        <Handbag />
      </BagIcon>
      <button>
        {t("add-to-cart")}
      </button>
    </CartComponentContainer>
  )
}