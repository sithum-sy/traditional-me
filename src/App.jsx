/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./routes/landing/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

import { RootSection, Contact } from "./routes/index";

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
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<RootSection />} />

        {/* <Route exact path="/blog" element={<Blog />} />
        <Route path="/blog/:name" element={<BlogPost />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
