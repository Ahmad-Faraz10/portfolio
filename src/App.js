import { StarIcon } from "@chakra-ui/icons";
import Card from "./Card";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
function App() {
  return (
    <div className="back">
      <a href="mailto:farazahmad8748@gmail.com" className="star_icon">
        Hire me
      </a>

      <div className=" container hback">
        <Header />
        <Card />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}

export default App;
