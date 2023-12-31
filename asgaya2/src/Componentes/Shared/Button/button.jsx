import React from "react";
import "./button.css";

const Button = ({ text, onClick }) => {
const handleClick = () => {
    if (onClick) {
    onClick();
    }
};

return (
    <button className="button" onClick={handleClick}>
    {text}
    </button>
);
};

export default Button;
