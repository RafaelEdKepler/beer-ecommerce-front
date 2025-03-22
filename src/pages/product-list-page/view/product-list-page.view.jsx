import HeaderComponent from "../../../components/header/header.component";
import LoadingPortal from "../../../LoadingPortal.jsx";
import ProductBoxComponent from "../components/product-box.component";
import { ProductListContainer, ProductsGridContainer, TitlePageContainer } from "../styles";

export default function ProductListPageView({ list, isLoading }) {

  if (isLoading) {
    return <LoadingPortal />
  }

  if (list) {
    return (
      <ProductListContainer>
        <HeaderComponent />
        <TitlePageContainer>
          <span>Hi Mr. Michael,</span>
          <h2>Welcome Back!</h2>
          <h3>Our Products</h3>
        </TitlePageContainer>
        <ProductsGridContainer>
          {list && list.map((product) => (
            <ProductBoxComponent
              key={product.id}
              brand={product.brand}
              image={product.image}
              price="$23.30"
            />
          ))}
        </ProductsGridContainer>
      </ProductListContainer>
    )
  }
}