import "./App.css";
import ChatBox from "./components/ChatBox";
import Courses from "./components/Courses";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ChatBox />
      <Courses />
      <Faqs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
