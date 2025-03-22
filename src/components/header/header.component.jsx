import { ArrowLeft, DotsThree, List } from "@phosphor-icons/react";
import { HeaderContainer } from "./style";
import UserIcon from "../../assets/user-icon.jpg"

export default function HeaderComponent({ title }) {

  return (
    <>
      {title ? (
        <HeaderContainer>
          <ArrowLeft />
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