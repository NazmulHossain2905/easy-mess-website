import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./navbar";
import Users from "./Users";
import { Avatar } from "components";
import { theme } from "styles/theme";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import easyMess from "assets/images/easy-mess.png";

const RootStack = () => {
  return (
    <BrowserRouter basename="/">
      <div style={{ display: "flex", background: "#222", minHeight: "100vh" }}>
        <div
          style={{
            background: "#222",
            flex: 1,
            maxHeight: "100vh",
            overflow: "auto",
            position: "fixed",
            bottom: 0,
            top: 0,
            width: 220,
          }}
        >
          <div
            style={{
              padding: "15px 5px",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              borderBottomColor: theme.colors.placeholder,
              borderBottomWidth: 1,
              borderBottomStyle: "solid",
            }}
          >
            <Avatar source={easyMess} />
            <h2 style={{ color: theme.colors.primary, fontWeight: "bolder" }}>
              Easy Mess
            </h2>
          </div>
          <Navbar />
        </div>
        <div
          style={{
            background: theme.colors.white,
            flex: 5.5,
            marginLeft: 220,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default RootStack;
