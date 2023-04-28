import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Singlepage from "./pages/Singlepage";
import NoData from "./pages/NoData";
import LoadingScreen from "./components/Spinner";
import Aboutpage from "./components/Aboutpage";

const App = () => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      <div className="container">
        {Loading ? (
          <LoadingScreen />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/show/:id" element={<Singlepage />} />
              <Route path="/about" element={<Aboutpage />} />
              <Route path="*" element={<NoData />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
