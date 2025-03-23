import { DescriptionContainer, ProductTextDetailsContainer, SizeChip, SizeContainer, TitleAndPriceContainer } from "./style";

export default function ProductDataComponent({ product, sizes, selectedSize, onShowPrice, onChangeSelectedSize, onExpandText, expandedText }) {

  return (
    <ProductTextDetailsContainer>
      <TitleAndPriceContainer>
        <div>
          <h2>{product.brand}</h2>
          <span>Origin: {product.origin} | Stock: {sizes ? sizes.stock : 0}</span>
        </div>
        <h3>{onShowPrice()}</h3>
      </TitleAndPriceContainer>
      <DescriptionContainer expanded={expandedText ? expandedText : undefined}>
        <h2>Description</h2>
        <p>
          {product.information}
        </p>
        <b onClick={onExpandText}>{expandedText ? "See less" : "Read more"}</b>
      </DescriptionContainer>
      <SizeContainer>
        <h2>Size</h2>
        <div>
          {product.skus.map((size, index) => (
            <SizeChip key={size.name} onClick={() => onChangeSelectedSize(index)} selected={index === selectedSize}>
              <span>{size.name}</span>
            </SizeChip>
          ))}
        </div>
      </SizeContainer>
    </ProductTextDetailsContainer>
  )
}