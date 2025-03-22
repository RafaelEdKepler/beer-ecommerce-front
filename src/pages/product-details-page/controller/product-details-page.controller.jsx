import { useParams } from "react-router-dom";
import ProductDetailsPageView from "../view/product-details-page.controller";
import { useCallback, useEffect, useState } from "react";
import { productsList } from "../../../mocks/products";
import { stockPrices } from "../../../mocks/stock-price";

export default function ProductDetailsPageController() {

  const [productDetails, setProductDetails] = useState();
  const [selectedSize, setSelectedSize] = useState(0);

  const { id } = useParams();

  const handleChangeSelectedSize = useCallback((size) => {
    setSelectedSize(size);
  }, [])

  const handleCalculatePrice = useCallback(() => {
    return `$${(productDetails.sizes[selectedSize].price / 100).toFixed(2)}`;
  }, [productDetails, selectedSize])

  useEffect(() => {
    const details = productsList.find(product => product.id == id);
    const sizes = details.skus.map(sku => (stockPrices[sku.code]))
    setProductDetails({
      product: details,
      sizes
    });
  }, [id, selectedSize])

  return (
    <ProductDetailsPageView
      data={productDetails}
      selectedSize={selectedSize}
      onShowPrice={handleCalculatePrice}
      onChangeSelectedSize={handleChangeSelectedSize}
    />
  )
}