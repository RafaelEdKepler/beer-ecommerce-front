import React from "react";
import { ArrowLeft, DotsThree, List } from "@phosphor-icons/react";
import { HeaderContainer } from "./style";
import UserIcon from "../../assets/user-icon.jpg"
import { useNavigate } from "react-router-dom";

export default function HeaderComponent({ title }) {

  const navigate = useNavigate();

  return (
    <>
      {title ? (
        <HeaderContainer>
          <ArrowLeft onClick={() => navigate(-1)} />
          <span>{title}</span>
          <DotsThree onClick={() => window.alert("Menu opened")} />
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <List />
          <img src={UserIcon} alt="Your perfil image" onClick={() => window.alert("Perfil opened")} />
        </HeaderContainer>
      )}
    </>
  )
}