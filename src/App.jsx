/* eslint-disable react/prop-types */

import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./routes/landing/Header.jsx";
import { RootSection } from "./routes/index";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header
        loginModal={
          <LoginModal
            validLogin={validLogin}
            setValidLogin={setValidLogin}
            setLoginModalWindow={setLoginModalWindow}
            loginModalWindow={loginModalWindow}
            hideMenu={hideMenu}
            getUser={getUser}
            setCurrentUser={setCurrentUser}
          />
        }
        activateLoginModal={activateLoginModal}
        showModal={showModal}
        isModalActive={isModalActive}
        hideMenu={hideMenu}
        handleLogout={handleLogout}
        validLogin={validLogin}
        productsQuantity={productsQuantity}
      /> */}
      <Header />
      <Routes>
        <Route path="/" element={<RootSection />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
