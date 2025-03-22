import { DescriptionContainer, ProductTextDetailsContainer, SizeChip, SizeContainer, TitleAndPriceContainer } from "./style";

export default function ProductDataComponent({ data, selectedSize, onShowPrice, onChangeSelectedSize }) {
  return (
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
  )
}