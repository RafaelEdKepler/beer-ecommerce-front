import HeaderComponent from "../../../components/header/header.component";
import { CentralizedWhitePageContainer, ProductDetailsContainer, ProductImageContainer } from "../styles";
import ProductDataComponent from "../components/product-data.component";
import AddToCartComponent from "../components/add-to-cart.component";
import ErrorComponent from "../../../components/error/error.component";
import LoadingPortal from "../../../components/loading/loading.component";


export default function ProductDetailsPageView({ product, onTryAgain, error, sizes, isLoading, selectedSize, onShowPrice, onChangeSelectedSize, onExpandText, expandedText }) {


  if (isLoading) {
    return (
      <LoadingPortal />
    )
  }

  return (
    <>
      <CentralizedWhitePageContainer>
        <HeaderComponent title="Detail" />
        {!error && product ? (
          <ProductDetailsContainer>
            <ProductImageContainer>
              <img alt="Photo of selected beer" src={product.image} />
            </ProductImageContainer>
            <ProductDataComponent
              product={product}
              sizes={sizes}
              selectedSize={selectedSize}
              onShowPrice={onShowPrice}
              onChangeSelectedSize={onChangeSelectedSize}
              onExpandText={onExpandText}
              expandedText={expandedText}
            />
            <AddToCartComponent />
          </ProductDetailsContainer>
        ) : (
          <>
            {error && (
              <ErrorComponent
                onTryAgain={onTryAgain}
              />
            )}
          </>
        )}
      </CentralizedWhitePageContainer>
    </>
  )
}