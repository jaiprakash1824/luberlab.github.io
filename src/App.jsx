import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Teams from "./pages/Teams/Teams.jsx";
// import IndividualPage from "./Pages/IndividualPage/IndividualPage.jsx";
import Home from "./pages/home/Home.jsx";
import NewsPage from "./pages/news/News.jsx";
// import Footer from "./Components/Footer/NewFooter.jsx";
// import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";
import Publications from "./pages/publications/Publications.jsx";
import { HomeNewsCardContext } from "./context/HomeNewsContext.jsx";
// import JobListings from "./Pages/JoinUs/JoinUs.jsx";
// import ResearchPage from "./Pages/Research/Research.jsx";
import Navbar from "./components/header/NavBar";
import { MemberProvider } from "./context/MemberContext";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Navbar />
      <MemberProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/team" element={<Teams />} />
          <Route path="/individual-page" element={<IndividualPage />} />*/}

          <Route
            path="/news"
            element={
              <HomeNewsCardContext>
                <NewsPage />
              </HomeNewsCardContext>
            }
          />

          <Route path="/publications" element={<Publications />} />
          {/* <Route path="/contact" element={<JobListings />} />
          <Route path="/research" element={<ResearchPage />} /> */}
        </Routes>
      </MemberProvider>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
