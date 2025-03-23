import React from "react";
import ReactDOM from "react-dom";
import { BreathingSphere, LoadingContainer, ParticleOne, ParticleThree, ParticleTwo, SpinnerContainer } from "./style";


export default function LoadingPortal() {
  return ReactDOM.createPortal(
    <LoadingContainer>
      <SpinnerContainer >
        <BreathingSphere>
          <ParticleOne />
          <ParticleTwo />
          <ParticleThree />
        </BreathingSphere>
        <p>Please, wait...</p>
      </SpinnerContainer>
    </LoadingContainer>, document.getElementById("loading-root")
  );
};