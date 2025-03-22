import HeaderComponent from "../../../components/header/header.component";
import { BagIcon, CartComponentContainer, DescriptionContainer, ProductDetailsContainer, ProductImageContainer, ProductTextDetailsContainer, SizeChip, SizeContainer, TitleAndPriceContainer } from "../styles";
import Budweiser from "../../../assets/budweiser.png";
import { Handbag } from "@phosphor-icons/react";


export default function ProductDetailsPageView() {
  return (
    <ProductDetailsContainer>
      <HeaderComponent title="Detail" />
      <ProductImageContainer>
        <img src={Budweiser} />
      </ProductImageContainer>
      <ProductTextDetailsContainer>
        <TitleAndPriceContainer>
          <div>
            <h2>Modelo Especial</h2>
            <span>Origin: Import | Stock: 456</span>
          </div>
          <h3>$26.40</h3>
        </TitleAndPriceContainer>
        <DescriptionContainer>
          <h2>Description</h2>
          <p>
            Selling imported beer in the US with nearly 60 million cases in annual sales, growing more than 15 million cases over the past 2 years. A full flavored Mexican lager consistently delivering ...
            <b>Read more</b>
          </p>
        </DescriptionContainer>
        <SizeContainer>
          <h2>Size</h2>
          <div>
            <SizeChip>
              <span>12 - 24oz</span>
            </SizeChip>
            <SizeChip>
              <span>18 - 12oz</span>
            </SizeChip>
            <SizeChip>
              <span>Half Barrel</span>
            </SizeChip>
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
  )
}