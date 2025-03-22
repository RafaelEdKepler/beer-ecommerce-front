import styled from "styled-components";

export const LoadingContainer = styled.div`
  position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const SpinnerContainer = styled.div`
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 1rem;
    color: #ffffff;
  }
`;

export const BreathingSphere = styled.div`
  width: 80px; /* Reduziu o tamanho da esfera */
  height: 80px; /* A altura também foi reduzida */
  border-radius: 50%;
  background: linear-gradient(45deg, #ff9f24, #e6b800); /* Dourado para amarelo */
  position: relative;
  animation: breathe 2s infinite, changeColor 3s infinite;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes breathe {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1); /* Aumenta para 1.1x */
    }
  }

  @keyframes changeColor {
      0% {
          background: #ff9f24;
      }
      50% {
          background: #ffd700;
      }
      100% {
          background: #ff9f24;
      }
  }
`;

const Particle = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: #ff9f24;
  animation: particleMove 2s infinite ease-in-out;

  @keyframes particleMove {
    0% {
        transform: scale(1) translate(0, 0);
    }
    25% {
        transform: scale(1.5) translate(10px, -10px);
    }
    50% {
        transform: scale(1) translate(0, 0);
    }
    75% {
        transform: scale(1.5) translate(-10px, 10px);
    }
    100% {
        transform: scale(1) translate(0, 0);
    }
}

`;

export const ParticleOne = styled(Particle)`
  width: 8px;
  height: 8px;
  top: -10px;
  left: 35%;
  animation-delay: 0s;
`;

export const ParticleTwo = styled(Particle)`
  width: 10px;
  height: 10px;
  top: 30%;
  left: 75%;
  animation-delay: 0.3s;
`;

export const ParticleThree = styled(Particle)`
  width: 6px;
    height: 6px;
    top: 50%;
    left: 10%;
    animation-delay: 0.6s;
`;