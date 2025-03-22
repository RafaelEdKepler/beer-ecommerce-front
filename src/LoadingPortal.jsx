import React from "react";
import ReactDOM from "react-dom";
import { BreathingSphere, LoadingContainer, ParticleOne, ParticleThree, ParticleTwo, SpinnerContainer } from "./style";
import { useProducts } from "./hooks/useProducts";

export default function LoadingPortal() {
  const { isLoading } = useProducts();

  if (!isLoading) return null;

  return ReactDOM.createPortal(
    <LoadingContainer>
      <SpinnerContainer >
        <BreathingSphere>
          <ParticleOne />
          <ParticleTwo />
          <ParticleThree />
        </BreathingSphere>
        <p>Por favor, aguarde...</p>
      </SpinnerContainer>
    </LoadingContainer>, document.getElementById("loading-root")
  );
};