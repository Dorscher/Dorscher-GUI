import { React } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import HomeView from "../views/Lane/HomeView";
import AboutView from "../views/Lane/AboutView";
import HelpView from "../views/Lane/HelpView";
import ContactView from "../views/Lane/ContactView";
import NavBar from "../components/NavBar";

import "../styles/LanePageSS.css";

function getNavLinks() {
  return [
    { id: 1, to: "", label: "Home", end: true, setActive: true },
    { id: 2, to: "about", label: "About", exact: false, setActive: true },
    { id: 3, to: "contact", label: "Contact", exact: false, setActive: true },
    { id: 4, to: "help", label: "Help", exact: false, setActive: true },
  ];
}

const LanePage = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="about" element={<AboutView />} />
        <Route path="contact" element={<ContactView />} />
        <Route path="help" element={<HelpView />} />
      </Route>
    </Routes>
  );
};

export default LanePage;

function Layout() {
  return (
    <div className="Lane-container">
      <div className="App">
        <header className="App-header">
          <h1>Lane Dorscher</h1>
          <p>Software Engineer</p>
        </header>
        <NavBar className="App-navigation" links={getNavLinks()} />
        <div className="App-content">
          <Outlet />
        </div>
        <footer className="App-footer">
          <span>Lane Dorscher &copy;2022</span>
        </footer>
      </div>
    </div>
  );
}
