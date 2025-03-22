import styled from "styled-components";
import { ProductListContainer } from "../../product-list-page/styles";

export const ProductDetailsContainer = styled(ProductListContainer)``;

export const ProductImageContainer = styled.div`
  	display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 15rem;
      height: 15rem;
    }
`;

export const ProductTextDetailsContainer = styled.div`
  	display: flex;
    flex-direction: column;
    gap: 1.25rem;
`;

export const TitleAndPriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 3.5rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;

    h2 {
      color: ${props => props.theme.colors['black-900']};
      font-size: 1.5rem;
    }

    span {
      color: ${props => props.theme.colors['gray-400']};
      font-size: 0.75rem;
    }
  }

  h3 {
    color: ${props => props.theme.colors['golden-700']};
    font-size: 1.5rem;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    font-size: 1rem;
    font-weight: 700;
  }

  p {
    color: ${props => props.theme.colors['gray-400']};
    font-size: 0.75rem;

    b {
      color: ${props => props.theme.colors['golden-700']};
      cursor: pointer;
    }
  }
`;

export const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 13px;

  h2 {
    font-size: 1rem;
    font-weight: 700;;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`;

export const SizeChip = styled.div`
  width: 5.5rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  border-width: 1px;
  border-color: ${props => props.selected ? props.theme.colors['golden-700'] : props.theme.colors['gray-400']};
  color: ${props => props.selected ? props.theme.colors['golden-700'] : props.theme.colors['gray-400']};
  border-radius: 15.5px;
  transition: 0.2s;

  span {
    font-size: 0.75rem;
    font-weight: 400;
  }

  &:hover {
    cursor: pointer;
    border-color: ${props => props.theme.colors['golden-700']};
  }
`;

export const CartComponentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3rem;
  gap: 1.5rem;

  button {
    width: 15.5rem;
    height: 3.3rem;
    cursor: pointer;
    border: none;
    background-color: ${props => props.theme.colors['golden-700']};
    color: ${props => props.theme.colors['white']};
    border-radius: 12px;
  }
`;

export const BagIcon = styled.div`
  width: 3.3rem;
  height: 3.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  border-width: 1px;
  border-color: ${props => props.theme.colors['golden-700']};
  border-radius: 12px;

  svg {
    color: ${props => props.theme.colors['golden-700']};
    width: 1.5rem;
    height: 1.5rem;
  }
`;