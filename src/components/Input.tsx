import React from "react";

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  style,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
        fontSize: "16px",
        ...style,
      }}
    />
  );
};

export default Input;
