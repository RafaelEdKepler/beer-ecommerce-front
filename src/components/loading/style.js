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
    color: ${props => props.theme.colors["white"]};
  }
`;

export const BreathingSphere = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(45deg, ${props => props.theme.colors['golden-700']}, ${props => props.theme.colors['golden-500']});
  position: relative;
  border: solid;
  border-color: ${props => props.theme.colors['gray-400']};
  animation: breathe 2s infinite;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes breathe {
    0%, 100% {
        transform: rotate(60deg);
    }
    50% {
        transform: rotate(180deg);
    }
  }
`;

const Particle = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: ${props => props.theme.colors['white']};
  animation: particleMove 2s infinite ease-in-out;

  @keyframes particleMove {
    0% {
        transform: translate(0, 0);
    }
    25% {
        transform: translate(2px, -2px);
    }
    50% {
        transform: translate(0, 0);
    }
    75% {
        transform: translate(-2px, 2px);
    }
    100% {
        transform: translate(0, 0);
    }
}

`;

export const ParticleOne = styled(Particle)`
  width: 8px;
  height: 8px;
  top: 20%;
  left: 35%;
  animation-delay: 0s;
`;

export const ParticleTwo = styled(Particle)`
  width: 15px;
  height: 15px;
  top: 55%;
  left: 65%;
  animation-delay: 0.3s;
`;

export const ParticleThree = styled(Particle)`
  width: 6px;
  height: 6px;
  top: 50%;
  left: 10%;
  animation-delay: 0.6s;
`;