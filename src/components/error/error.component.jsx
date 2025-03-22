import { ErrorContainer } from "./style";
import Beer from "../../assets/beer.png";

export default function ErrorComponent({ onTryAgain }) {
  return (
    <ErrorContainer>
      <img src={Beer} />
      <span>Something went wrong... :(</span>
      <button
        onClick={onTryAgain}
      >Try again</button>
    </ErrorContainer>
  )
}