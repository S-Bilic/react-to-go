import React from "react";
import styles from "./button.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Button = ({
  href,
  action,
  target,
  text,
  className,
  color,
  textColor,
  link,
  boxShadow,
  borderRadius,
  grow,
}) => {
  const colorContrast = color === "dark" ? (textColor = "light") : textColor;
  const classes = cx(
    {
      button: true,
      link,
      boxShadow,
      borderRadius,
      grow,
      [`background-${color}`]: color,
      [`color-${colorContrast}`]: textColor,
    },
    className
  );

  const CustomComponent = href ? "a" : "button";

  const attributes = href ? { href, target } : {};

  return (
    <CustomComponent className={classes} onClick={action} {...attributes}>
      {text}
    </CustomComponent>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  action: PropTypes.func,
  href: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  link: PropTypes.bool,
  boxShadow: PropTypes.bool,
  borderRadius: PropTypes.bool,
  grow: PropTypes.bool,
  target: PropTypes.string,
};

Button.defaultProps = {
  className: "",
  action: () => null,
  href: "",
  text: "",
  color: "positive",
  textColor: "dark",
  link: false,
  boxShadow: false,
  borderRadius: false,
  grow: false,
  target: "_self",
};

export default Button;
