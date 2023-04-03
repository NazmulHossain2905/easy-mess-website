import React from "react";
import logo from "assets/images/logo.png";

type ImageProps = {
  source?: string;
};

const Image: React.FC<ImageProps> = () => {
  return (
    <div style={{ width: 200, height: 200, background: "#f00" }}>
      <img style={{ width: 100, height: 100 }} src={logo} alt="" />
    </div>
  );
};
export default Image;
