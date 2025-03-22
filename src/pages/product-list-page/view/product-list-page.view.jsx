import ErrorComponent from "../../../components/error/error.component";
import HeaderComponent from "../../../components/header/header.component";
import LoadingPortal from "../../../components/loading/loading.component";
import ProductBoxComponent from "../components/product-box.component";
import { ProductListContainer, ProductsGridContainer, TitlePageContainer } from "../styles";

export default function ProductListPageView({ list, isLoading, error, onTryAgain, onClickProduct }) {

  if (isLoading) {
    return <LoadingPortal />
  } else {
    return (
      <ProductListContainer>
        <HeaderComponent />
        <TitlePageContainer>
          <span>Hi Mr. Michael,</span>
          <h2>Welcome Back!</h2>
          <h3>Our Products</h3>
        </TitlePageContainer>
        {!error ? (
          <ProductsGridContainer>
            {list && list.map((product) => (
              <ProductBoxComponent
                key={product.id}
                brand={product.brand}
                image={product.image}
                id={product.id}
                price="$23.30"
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
}