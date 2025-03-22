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
          <DotsThree />
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <List />
          <img src={UserIcon} />
        </HeaderContainer>
      )}
    </>
  )
}