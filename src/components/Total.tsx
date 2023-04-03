import React from "react";
import styles from "./Button.module.css";
import Space from "./Space";
import { theme } from "styles/theme";

type TotalProps = {
  count: number | string;
  label: string;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  countStyle?: React.CSSProperties;
};

const Total: React.FC<TotalProps> = ({
  count,
  label,
  style,
  labelStyle,
  countStyle,
}) => {
  return (
    <div
      style={{
        width: 200,
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: theme.colors.header_white,
        flex: 1,
        margin: 20,
        borderRadius: 5,
        ...style,
      }}
    >
      <h1 style={{ color: theme.colors.header_dark, ...countStyle }}>
        {count}
      </h1>
      <h3 style={{ color: theme.colors.success, ...labelStyle }}>{label}</h3>
    </div>
  );
};

export default Total;
