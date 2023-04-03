// import React from "react";
// import styles from "./PageLoading.module.css";

// const Loading: React.FC = () => {
//   return (
//     <div className={styles["loading-container"]}>
//       <div className={styles["loading-circle"]}></div>
//       <div className={styles["loading-bar"]}></div>
//       <div className={styles["loading-bounce"]}></div>
//     </div>
//   );
// };

// export default Loading;

import React from "react";
import styles from "./PageLoading.module.css";

interface Props {
  isLoading: boolean;
}

const PageLoading: React.FC<Props> = ({ isLoading }) => {
  return isLoading ? (
    <div className={styles["page-loading-container"]}>
      <div className={styles["page-loading-spinner"]}></div>
    </div>
  ) : null;
};

export default PageLoading;
