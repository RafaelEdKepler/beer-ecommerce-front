import { List } from "@phosphor-icons/react";
import { HeaderContainer } from "./style";
import UserIcon from "../../assets/user-icon.jpg"

export default function HeaderComponent() {

  return (
    <HeaderContainer>
      <List />
      <img src={UserIcon} />
    </HeaderContainer>
  )
}