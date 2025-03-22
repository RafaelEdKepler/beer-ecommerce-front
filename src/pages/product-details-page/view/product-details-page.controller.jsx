import HeaderComponent from "../../../components/header/header.component";
import { BagIcon, CartComponentContainer, CentralizedWhitePageContainer, DescriptionContainer, ProductDetailsContainer, ProductImageContainer, ProductTextDetailsContainer, SizeChip, SizeContainer, TitleAndPriceContainer } from "../styles";
import Budweiser from "../../../assets/budweiser.png";
import { Handbag } from "@phosphor-icons/react";


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
            <ProductTextDetailsContainer>
              <TitleAndPriceContainer>
                <div>
                  <h2>{data.product.brand}</h2>
                  <span>Origin: {data.product.origin} | Stock: {data.sizes[selectedSize].stock}</span>
                </div>
                <h3>{onShowPrice()}</h3>
              </TitleAndPriceContainer>
              <DescriptionContainer>
                <h2>Description</h2>
                <p>
                  {data.product.information}
                  <b>Read more</b>
                </p>
              </DescriptionContainer>
              <SizeContainer>
                <h2>Size</h2>
                <div>
                  {data.product.skus.map((size, index) => (
                    <SizeChip key={size.name} onClick={() => onChangeSelectedSize(index)} selected={index === selectedSize}>
                      <span>{size.name}</span>
                    </SizeChip>
                  ))}
                </div>
              </SizeContainer>
            </ProductTextDetailsContainer>
            <CartComponentContainer>
              <BagIcon>
                <Handbag />
              </BagIcon>
              <button>
                Add to cart
              </button>
            </CartComponentContainer>
          </ProductDetailsContainer>
        )}
      </CentralizedWhitePageContainer>
    </>
  )
}