import React from "react";
import { ReactSVG } from "react-svg";
import classNames from "classnames/bind";
import styles from "./icon.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Icon = ({ className, name, size, color, fill, stroke, strokeWidth }) => {
  let classes = cx(
    {
      icon: true,
      [`icon-${size}`]: size,
      [`icon-${color}`]: color,
    },
    className
  );

  const svgStyle = {
    fill,
    stroke,
    strokeWidth,
  };

  return (
    <ReactSVG
      color={color}
      src={`./icons/${name}.svg`}
      className={classes}
      style={svgStyle}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Icon.defaultProps = {
  name: "",
  color: "light",
  size: "s",
  className: "",
  fill: "",
  stroke: "",
  strokeWidth: null,
};

export default Icon;
