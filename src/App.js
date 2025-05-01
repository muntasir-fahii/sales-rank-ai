import "./App.css";
import BlurBlob from "./components/BlurBlob";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChatBox from "./components/ChatBox";
import Courses from "./components/Courses";
import Faqs from "./components/Faqs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-hidden">
      <BlurBlob position="topLeft" />
      <Navbar />
      <Hero />
      <ChatBox />
      <Courses />
      <Faqs />
      <Testimonials />
      <Footer />
      <BlurBlob position="bottomLeft" />
    </div>
  );
}

export default App;
