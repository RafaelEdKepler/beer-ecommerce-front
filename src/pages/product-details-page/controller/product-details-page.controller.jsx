import ProductDetailsPageView from "../view/product-details-page.view";
import { useCallback, useState } from "react";
import { useSelectedProduct } from "../../../hooks/useProducts";
import { useNavigate } from "react-router-dom";

export default function ProductDetailsPageController() {
  const [selectedSize, setSelectedSize] = useState(0);
  const [expandedText, setExpandedText] = useState(false);
  const navigate = useNavigate();

  const { product, sizes, isLoading, error } = useSelectedProduct(selectedSize);

  const handleExpandText = useCallback(() => {
    setExpandedText(!expandedText);
  }, [expandedText])

  const handleChangeSelectedSize = useCallback((size) => {
    setSelectedSize(size);
  }, []);

  function handleOnTryAgain() {
    navigate(0)
  }

  const handleCalculatePrice = useCallback(() => {
    if (isLoading || !sizes) return "$0.00";
    return `$${(sizes.price / 100).toFixed(2)}`;
  }, [sizes, isLoading]);

  return (
    <ProductDetailsPageView
      product={product}
      onTryAgain={handleOnTryAgain}
      sizes={sizes}
      error={error.isProductWithError}
      isLoading={isLoading}
      selectedSize={selectedSize}
      onShowPrice={handleCalculatePrice}
      onChangeSelectedSize={handleChangeSelectedSize}
      onExpandText={handleExpandText}
      expandedText={expandedText ? String(expandedText) : undefined}
    />
  )
}