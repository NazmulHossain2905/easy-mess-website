import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHomeUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { theme } from "styles/theme";

const NAB_LINKS = [
  { name: "Home", path: "/", icon: faHome },
  { name: "Users", path: "/users", icon: faUsers },
  { name: "Mess", path: "/mess", icon: faHomeUser },
];

const Navbar = () => {
  return (
    <>
      {NAB_LINKS.map((route, index) => {
        return (
          <NavLink
            key={index.toString()}
            style={{
              borderLeftColor: theme.colors.primary,
              borderLeftWidth: 2,
              borderLeftStyle: "solid",
            }}
            className={styles["nav-link"]}
            to={route.path}
          >
            <FontAwesomeIcon
              icon={route.icon}
              style={{ marginRight: 20 }}
              color={theme.colors.primary}
            />

            {route.name}
          </NavLink>
        );
      })}
    </>
  );
};

export default Navbar;
