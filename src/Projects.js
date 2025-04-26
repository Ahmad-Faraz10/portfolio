import { Image } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
const Projects = () => {
  return (
    <div className="container">
      <div className="project-container ">
        <div className="text-title text-center project-title">
          <h1 className="project-title">Projects</h1>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-12">
            <div className="pro-card">
              <div className="pimage-container">
                <Image
                  src="../img/obb.png"
                  alt="Profile Pic"
                  className="pro-image"
                  fill
                />{" "}
                <a
                  href="https://onebigbit.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <div className="link">
                    <AiFillGithub color="#b11f83" size="2em" />
                  </div>{" "}
                </a>
                <a
                  href="https://onebigbit.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <div className="link1">
                    <FaExternalLinkAlt color="#b11f83" size="1.7em" />
                  </div>{" "}
                </a>
              </div>
              <p className="pro-title">One Big Bit</p>
              <p className="pro-sub">
                Developed a responsive company website using ReactJS and
                Bootstrap to highlight skills, completed projects, and work
                experience. Features include smooth navigation, a portfolio
                section, and a modern, clean UI.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-12">
            <div className="pro-card">
              <div className="pimage-container">
                <Image
                  src="../img/pv.png"
                  alt="Profile Pic"
                  className="pro-image"
                  fill
                />{" "}
                <a
                  href="https://github.com/Ahmad-Faraz10/pathfindervisualizer"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <div className="link">
                    <AiFillGithub color="#b11f83" size="2em" />
                  </div>{" "}
                </a>
                <a
                  href="https://pathfindervisualiz.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <div className="link1">
                    <FaExternalLinkAlt color="#b11f83" size="1.7em" />
                  </div>{" "}
                </a>
              </div>
              <p className="pro-title">PathFinding Visualizer</p>
              <p className="pro-sub">
                Path finding algorithms build on top of graph search algorithms
                and explore routes between nodes, starting at one node and
                traversing through relationships until the destination has been
                reached.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-12">
            <div className="pro-card">
              <div className="pimage-container">
                <Image
                  src="../img/port.png"
                  alt="Profile Pic"
                  className="pro-image"
                  fill
                />{" "}
                <a
                  href="https://github.com/Ahmad-Faraz10/portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <div className="link">
                    <AiFillGithub color="#b11f83" size="2em" />
                  </div>{" "}
                </a>
                <a
                  href="https://farazansar.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <div className="link1">
                    <FaExternalLinkAlt color="#b11f83" size="1.7em" />
                  </div>{" "}
                </a>
              </div>
              <p className="pro-title">Portfolio</p>
              <p className="pro-sub">
                Path finding algorithms build on top of graph search algorithms
                and explore routes between nodes, starting at one node and
                traversing through relationships until the destination has been
                reached.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
