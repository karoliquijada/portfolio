import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  active: "active",
  inactive: "inactive",
};

const Button = ({ children = "hello", url, buttonType = "active" }) => {
  return (
    <a href={url} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} target="_blank">
      {children}
    </a>
  );
};

export default Button;
