import { productsList } from "../../../mocks/products";
import ProductListPageView from "../view/product-list-page.view";
import { useEffect, useState } from "react";

export default function ProductListPageController() {

  const [list, setList] = useState();

  useEffect(() => {
    setList(productsList)
  }, [])

  return (
    <ProductListPageView
      list={list}
    />
  )
}