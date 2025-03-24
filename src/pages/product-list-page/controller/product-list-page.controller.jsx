import React, { useCallback } from "react";
import { useProducts } from "../../../hooks/useProducts";
import ProductListPageView from "../view/product-list-page.view";
import { useNavigate } from "react-router-dom";

export default function ProductListPageController() {
  const { data, isLoading, error, refetch } = useProducts();
  const navigate = useNavigate()

  const handleTryAgainOnError = useCallback(() => {
    refetch();
  }, [refetch])

  const handleClickProduct = useCallback((id) => {
    navigate(`/product/${id}`)
  }, [navigate])

  return (
    <ProductListPageView
      list={data}
      isLoading={isLoading}
      error={error}
      onTryAgain={handleTryAgainOnError}
      onClickProduct={handleClickProduct}
    />
  )
}