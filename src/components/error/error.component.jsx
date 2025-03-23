import { ErrorContainer } from "./style";
import Beer from "../../assets/beer.png";
import { useTranslation } from "react-i18next";

export default function ErrorComponent({ onTryAgain }) {

  const { t } = useTranslation("error");

  return (
    <ErrorContainer>
      <img src={Beer} />
      <span>{t("something-went-wrong")}</span>
      <button
        onClick={onTryAgain}
      >Try again</button>
    </ErrorContainer>
  )
}