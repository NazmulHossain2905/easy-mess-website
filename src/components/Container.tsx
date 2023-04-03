import React from "react";

import styles from "./Container.module.css";

type ContainerProps = {
  children: React.ReactNode;
  center?: boolean;
};

const Container: React.FC<ContainerProps> = ({ children, center }) => {
  return (
    <div className={center ? styles.center : styles.container}>{children}</div>
  );
};

export default Container;
