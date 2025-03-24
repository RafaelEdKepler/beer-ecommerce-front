import React from "react";
import { Handbag } from "@phosphor-icons/react";
import { BagIcon, CartComponentContainer } from "./style";
import { useTranslation } from "react-i18next";

export default function AddToCartComponent() {

  const { t } = useTranslation("product-details");

  return (
    <CartComponentContainer>
      <BagIcon>
        <Handbag />
      </BagIcon>
      <button onClick={() => window.alert("Added to cart")}>
        {t("add-to-cart")}
      </button>
    </CartComponentContainer>
  )
}