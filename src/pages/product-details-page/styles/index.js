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