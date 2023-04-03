import React from "react";
import styles from "./Avatar.module.css";
import logo from "assets/images/logo.png";

type AvatarProps = {
  source?: string;
  size?: number;
  alt?: string;
};

const Avatar: React.FC<AvatarProps> = ({ source, size = 50, alt }) => {
  return (
    <div>
      <img
        // className={styles.avatar}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          objectFit: "cover",
        }}
        src={source || logo}
        alt={alt || "Image"}
      />
    </div>
  );
};

export default Avatar;
