import HeaderComponent from "../../../components/header/header.component";
import { CentralizedWhitePageContainer, ProductDetailsContainer, ProductImageContainer } from "../styles";
import ProductDataComponent from "../components/product-data.component";
import AddToCartComponent from "../components/add-to-cart.component";


export default function ProductDetailsPageView({ data, selectedSize, onShowPrice, onChangeSelectedSize }) {

  return (
    <>
      <CentralizedWhitePageContainer>
        <HeaderComponent title="Detail" />
        {data && (
          <ProductDetailsContainer>
            <ProductImageContainer>
              <img src={data.product.image} />
            </ProductImageContainer>
            <ProductDataComponent
              data={data}
              selectedSize={selectedSize}
              onShowPrice={onShowPrice}
              onChangeSelectedSize={onChangeSelectedSize}
            />
            <AddToCartComponent />
          </ProductDetailsContainer>
        )}
      </CentralizedWhitePageContainer>
    </>
  )
}