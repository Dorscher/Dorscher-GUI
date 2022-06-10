import React from "react";
import { Routes, Route } from "react-router-dom";
import LanePage from "./pages/LanePage";
import MainPage from "./pages/MainPage";


const App = () => {

   
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect( () => {
  //   RemoveTrailingSlash(location.pathname,navigate);
  // });

  return (
    <>
    <Routes>
      <Route path="/*" element={<MainPage />} />
      <Route path="lane/*" element={<LanePage />} />
    </Routes>

    </>
  );
}


// function RemoveTrailingSlash(path, navigate) {

//   if (path.slice(-1) === '/') {
//       navigate(`${path.replace(/\/+$/, '')}`, {replace:false});
//   }
// };

export default App;
