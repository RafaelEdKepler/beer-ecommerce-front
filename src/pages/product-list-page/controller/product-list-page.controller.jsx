import { useProducts } from "../../../hooks/useProducts";
import ProductListPageView from "../view/product-list-page.view";

export default function ProductListPageController() {
  const { data, isLoading, error } = useProducts();

  return (
    <ProductListPageView
      list={data}
      isLoading={isLoading}
    />
  )
}