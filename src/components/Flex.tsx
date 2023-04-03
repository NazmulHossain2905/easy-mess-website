import React from "react";

type FlexProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  direction?: "column" | "row" | "row-reverse";
  justify?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-between"
    | "space-around";
  align?: "center" | "flex-end" | "flex-start";
};

const Flex: React.FC<FlexProps> = ({
  children,
  style,
  direction = "column",
  justify = "center",
  align = "center",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: justify,
        flexDirection: direction,
        alignItems: align,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
