import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  
  
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      
      
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Sidebar />
          <Features />
          <Projects />
          <Resume />
          <Testimonial />
          <Contact />
          <FooterBottom />
        </div>
      </div>
    </div>
  );
}

export default App;
