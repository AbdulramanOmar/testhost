import { Link } from "react-router-dom";
import "./button.css";
import { useTranslation } from "react-i18next";

const Button = (props) => {
  const { t } = useTranslation();
  return (
    <Link to={props.path} className="link-button">
      <button className="button">{t(props.title)}</button>
    </Link>
  );
};

export default Button;
