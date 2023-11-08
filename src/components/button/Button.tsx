import React from "react";

const Button = ({ title, border, background, width, padding, borderRadius, color, onClick }) => {
  const styles = {
    border: border,
    background: background,
    width: width,
    padding: padding,
    borderRadius: borderRadius,
    color: color
  }

  return (
    <button onClick={onClick} style={styles}>{title}</button>
  )
}

export default Button