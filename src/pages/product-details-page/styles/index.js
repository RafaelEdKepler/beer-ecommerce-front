import styled from "styled-components";
import { ProductListContainer } from "../../product-list-page/styles";

export const CentralizedWhitePageContainer = styled.div`

  padding: 2.5rem 1.5rem 1.5rem 1.5rem;

  @media (min-width: 760px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`;

export const ProductDetailsContainer = styled(ProductListContainer)`
  width: 100%;
  padding: 0;

  @media (min-width: 760px) {
    width: 50%;
  }
`;

export const ProductImageContainer = styled.div`
  	display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 15rem;
      height: 15rem;
    }

    @media (min-width: 760px) {
      margin-top: 5rem;

      img {
        width: 25rem;
        height: 25rem;
      }
    }
`;

export const ProductTextDetailsContainer = styled.div`
  	display: flex;
    flex-direction: column;
    gap: 1.25rem;

    @media (min-width: 760px) {
      gap: 2.25rem;
    }
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

  @media (min-width: 760px) {
    flex-direction: column;
    gap: 1rem;

    div {

      gap: 0.5rem;

      h2 {
        font-size: 1.75rem;
      }

      span {
        font-size: 1rem;
      }
    }

    h3 {
      font-size: 1.75rem;
    }
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

  @media (min-width: 760px) {
    h2 {
      font-size: 1.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 125%;
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

  @media (min-width: 760px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const SizeChip = styled.div`
  width: 5.7rem;
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
  padding: 0.1rem;

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