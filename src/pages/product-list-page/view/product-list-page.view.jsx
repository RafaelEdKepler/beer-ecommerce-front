import React from "react";
import { useTranslation } from "react-i18next";
import ErrorComponent from "../../../components/error/error.component";
import HeaderComponent from "../../../components/header/header.component";
import LoadingPortal from "../../../components/loading/loading.component";
import ProductBoxComponent from "../components/product-box.component";
import { ProductListContainer, ProductsGridContainer, TitlePageContainer } from "../styles";

export default function ProductListPageView({ list, isLoading, error, onTryAgain, onClickProduct }) {

  const { t } = useTranslation("product-list");

  if (isLoading) {
    return <LoadingPortal />
  }

  return (
    <ProductListContainer>
      <HeaderComponent />
      <TitlePageContainer>
        <span>{t("hi", {
          name: "Mr. Michael"
        })}</span>
        <h2>{t("welcome-back")}</h2>
        <h3>{t("our-products")}</h3>
      </TitlePageContainer>
      {!error ? (
        <ProductsGridContainer>
          {list && list.map((product) => (
            <ProductBoxComponent
              key={product.id}
              brand={product.brand}
              image={product.image}
              id={product.id}
              price={product.minPrice}
              onClick={onClickProduct}
            />
          ))}
        </ProductsGridContainer>
      ) : (
        <ErrorComponent
          onTryAgain={onTryAgain}
        />
      )}
    </ProductListContainer>
  )
}