import Card from "./Card";
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
      </div>
    </div>
  );
}

export default App;
