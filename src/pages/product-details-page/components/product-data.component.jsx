import React from "react";
import { useTranslation } from "react-i18next";
import { DescriptionContainer, ProductTextDetailsContainer, SizeChip, SizeContainer, TitleAndPriceContainer } from "./style";

export default function ProductDataComponent({ product, sizes, selectedSize, onShowPrice, onChangeSelectedSize, onExpandText, expandedText }) {

  const { t } = useTranslation("product-details");

  return (
    <ProductTextDetailsContainer>
      <TitleAndPriceContainer>
        <div>
          <h2>{product.brand}</h2>
          <span>{t("origin")} {product.origin} | {t('stock')} {sizes ? sizes.stock : 0}</span>
        </div>
        <h3>{onShowPrice()}</h3>
      </TitleAndPriceContainer>
      <DescriptionContainer expanded={expandedText ? expandedText : undefined}>
        <h2>{t('description')}</h2>
        <p>
          {product.information}
        </p>
        <b onClick={onExpandText}>{expandedText ? t('see-less') : t('read-more')}</b>
      </DescriptionContainer>
      <SizeContainer>
        <h2>{t('size')}</h2>
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