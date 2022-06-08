import { React } from "react";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";

import HomeView from "../views/Lane/HomeView";
import AboutView from "../views/Lane/AboutView";
import HelpView from "../views/Lane/HelpView";
import ContactView from "../views/Lane/ContactView";
import NavBar from "../components/NavBar";

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
        <h1>Lane Dorscher</h1>
        <p>Software Engineer</p>
      </header>
      <div className="App-navigation">
        <ul>
          <li><NavLink end to="">Home</NavLink></li>
          <li><NavLink to="about">About</NavLink></li>
          <li><NavLink to="contact">Contact</NavLink></li>
          <li><NavLink exact strict to="lane/">Help</NavLink></li>
        </ul>
      </div>
      <div className="App-content">
          <NavBar array={["Help", "me", "my", "son", "is", "goated"]}/>
        <Outlet />
      </div>
      <footer className="App-footer">
        <span>Lane Dorscher &copy;2022</span>
      </footer>
    </div>
  );
}