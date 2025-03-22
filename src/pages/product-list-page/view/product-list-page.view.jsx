import HeaderComponent from "../../../components/header/header.component";
import ProductBoxComponent from "../components/product-box.component";
import { ProductListContainer, ProductsGridContainer, TitlePageContainer } from "../styles";

export default function ProductListPageView() {
  return (
    <ProductListContainer>
      <HeaderComponent />
      <TitlePageContainer>
        <span>Hi Mr. Michael,</span>
        <h2>Welcome Back!</h2>
        <h3>Our Products</h3>
      </TitlePageContainer>
      <ProductsGridContainer>
        <ProductBoxComponent />
        <ProductBoxComponent />
        <ProductBoxComponent />
        <ProductBoxComponent />
        <ProductBoxComponent />
        <ProductBoxComponent />
        <ProductBoxComponent />
        <ProductBoxComponent />
        <ProductBoxComponent />
        <ProductBoxComponent />
        <ProductBoxComponent />
      </ProductsGridContainer>
    </ProductListContainer>
  )
}