import styled from "styled-components";

export const ErrorContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  gap: 1.5rem;

  img {
    width: 5rem;
    height: 5rem;
  }

  span {
    color: ${props => props.theme.colors['gray-400']};
    font-size: 1rem;
    font-weight: 500;
  }

  button {
    border: none;
    width: 10rem;
    height: 2rem;
    background-color: ${props => props.theme.colors['golden-700']};
    color: ${props => props.theme.colors['white']};
    border-radius: 6px;
    cursor: pointer;
  }
`;