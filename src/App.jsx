import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Discover from "./pages/Discover/Discover";
import EducationTests from "./pages/EducationTests/EducationTests";
import MentorsStories from "./pages/MentorsStories/MentorsStories";
import Events from "./pages/Events/Events";
import YourProfile from "./pages/YourProfile/YourProfile";
import TopBanner from "./components/TopBanner/TopBanner";
import Home from "./pages/Home/Home";
import Help from "./pages/Help/Help";
import SchoolList from "./pages/Schools/SchoolList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="main">
      <Navigation />
      <div className="container">
        <TopBanner />
        <div className="background">
          <div className="background-inner">
            <Routes>
              <Route path="/odkrywaj" element={<Discover />} />
              <Route path="/edukacja&testy" element={<EducationTests />} />
              <Route path="/mentorzy&historie" element={<MentorsStories />} />
              <Route path="/wydarzenia" element={<Events />} />
              <Route path="/profil/*" element={<YourProfile />} />
              <Route path="/pomoc" element={<Help />} />
              <Route path="/szkoly" element={<SchoolList />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;