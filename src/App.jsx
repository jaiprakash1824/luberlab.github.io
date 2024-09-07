import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teams from "./Pages/Teams/Teams.jsx";
import IndividualPage from "./Pages/IndividualPage/IndividualPage.jsx";
import Home from "./Pages/Home/Home.jsx";
// import Header from "./Components/Header/header.jsx";
import News from "./Pages/news/News.jsx";
import Footer from "./Components/Footer/footer.jsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";
import Publications from "./Pages/Publications/Publications.jsx";
import JobListings from "./Pages/JoinUs/JoinUs.jsx";
import ResearchPage from "./Pages/Research/Research.jsx";
import Navbar from "./Components/Header/Navbar.jsx";
import { MemberProvider } from "./Components/Teams/MemberContext";
import "./App.css";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      {/* <Header /> */}
      <Navbar />
      <MemberProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/individual-page" element={<IndividualPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<JobListings />} />
          <Route path="/research" element={<ResearchPage />} />
        </Routes>
      </MemberProvider>
      <Footer />
    </Router>
  );
}

export default App;
