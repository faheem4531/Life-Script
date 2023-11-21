import React from "react";
import Image from "next/image";

const Button = ({ title, border, background, width, padding, borderRadius, color, onClick, image }) => {
  const styles = {
    border: border || "none",
    background: background,
    width: width,
    padding: padding,
    borderRadius: borderRadius,
    color: color,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: "none",
  }

  const styles2 = {
    padding: "0 7px 0 0"
  }

  return (
    <button onClick={onClick} style={styles}>
      {image != undefined && <Image alt="image" src={image} style={styles2} />}
      {title}</button>
  )
}

export default Button