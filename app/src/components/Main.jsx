import React, { useEffect, useState } from "react";
import "../styles/Main.css";
import NavigationBar from "./Navbar";
import Header from "./Header";
import Destinations from "./Destinations";
import MostPopular from "./MostPopular";
import BestChoice from "./BestChoice";
import Footer from "./Footer";
import Info from "./Info";
import Stays from "./Stays";
import Accommodation from "./Accommodation";
import load from "../assets/load.gif"

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []); // <-- Empty dependency array to run only on mount

  return (
    <div>
      {loading ? (
        
        <div className="main"><img src={load} className="image"/></div>
      ) : (
        <>
          <NavigationBar />
          <Header />
          <Info />
          <MostPopular />
          <Accommodation />
          <Destinations />
          <Stays />
          <BestChoice />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Main;
