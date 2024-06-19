import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teams from "./Pages/Teams/Teams.jsx";
import IndividualPage from "./Pages/IndividualPage/IndividualPage.jsx";
import Home from "./Pages/Home/Home.jsx";
import Header from "./Components/Header/header.jsx";
import News from "./Pages/news/News.jsx";
import Footer from "./Components/Footer/footer.jsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";
import { MemberProvider } from "./Components/Teams/MemberContext"; // Adjust the path as needed

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <MemberProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/individual-page" element={<IndividualPage />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </MemberProvider>
      <Footer />
    </Router>
  );
}

export default App;
