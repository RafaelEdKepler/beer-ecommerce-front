import styled from "styled-components";

export const ProductBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 9.6rem;
  gap: 5px;
  border-radius: 12px 32px 12px 12px;
  background-color: ${props => props.theme.colors['white']};
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  padding-top: 1rem;

  h3 {
    font-weight: 500;
    font-size: 1rem;
  }

  img {
    width: 7.6rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;

    span {
      font-weight: 500;
      font-size: 1rem;
      margin: 0 0 0.5rem 0.75rem;
    }
  }

  @media (min-width: 760px) {
    width: 12.6rem;

    img {
      width: 9.6rem;
    }
  }
`;

export const ButtonAddToCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  color: ${props => props.theme.colors['white']};
  background-color: ${props => props.theme.colors['golden-700']};
  border-radius: 8px 0 8px 0;
  border-left: ${props => props.theme.colors['white']};
  border-top: ${props => props.theme.colors['white']};
  border-right: ${props => props.theme.colors['golden-700']};
  border-bottom: ${props => props.theme.colors['golden-700']};
  border-style: solid;
  border-width: 2px;
  transition: 0.2s;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    border-color: ${props => props.theme.colors['golden-700']};
    background-color: ${props => props.theme.colors['white']};
    color: ${props => props.theme.colors['golden-700']};
    cursor: pointer;
  }
`;