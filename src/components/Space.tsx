import React from "react";

type SpaceProps = {
  height?: number;
  width?: number;
};

const Space: React.FC<SpaceProps> = ({ height, width }) => {
  return <div style={{ height, width }} />;
};

export default Space;
