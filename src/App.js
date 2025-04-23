import Card from "./Card";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
function App() {
  return (
    <div className="back">
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
