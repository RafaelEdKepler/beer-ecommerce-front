import styled from "styled-components";

export const ProductListContainer = styled.section`
  	display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2.5rem 1.5rem 1.5rem 1.5rem;
`;

export const TitlePageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;

  span {
    font-weight: 400;
    font-size: 1rem;
    color: ${props => props.theme.colors['gray-600']}
  }

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    margin: 0.75rem 0 1.25rem 0;
  }

  h3 {
    font-weight: 700;
    font-size: 1.125;
  }

  @media (min-width: 760px) {
    align-items: center;
    gap: 1rem;

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
`;

export const ProductsGridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 13px;
  margin-top: 1rem;

  @media (min-width: 760px) {
    row-gap: 3rem;
    margin-top: 5rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`