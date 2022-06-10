import { React } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import HomeView from "../views/Lane/HomeView";
import AboutView from "../views/Lane/AboutView";
import HelpView from "../views/Lane/HelpView";
import ContactView from "../views/Lane/ContactView";
import NavBar from "../components/NavBar";

function getNavLinks() {
  return ([
    {id: 1, to: "", label: "Home", exact: true, setActive: true},
    {id: 2, to: "lane", label: "Lane", exact: true, setActive: true},
  ])
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
    <div className="App">
      <header className="App-header">
        <h1>Dorscher</h1>
        <p>A family page</p>
      </header>
      <NavBar className="App-navigation" links={getNavLinks()} />
      <div className="App-content">
        <Outlet />
      </div>
      <footer className="App-footer">
        <span>Lane Dorscher &copy;2022</span>
      </footer>
    </div>
  );
}

