import { Image } from "@chakra-ui/react";
import java from "./img/Java.svg";
import js from "./img/JavaScript.svg";
import rjs from "./img/React.svg";
import ex from "./img/Express.svg";
import node from "./img/Node.js.svg";
import mdb from "./img/MongoDB.svg";
import sql from "./img/MySQL.svg";
import bst from "./img/Bootstrap.svg";
import R from "./img/R.svg";
import Fapi from "./img/FastAPI.svg";
import p from "./img/Python.svg";
import html from "./img/html.svg";
import css from "./img/css.svg";
const Skills = () => {
  return (
    <div className="container">
      <div className="project-container ">
        <div className="text-title text-center project-title">
          <h1 className="project-title">Skills</h1>
        </div>
        <div className="Skill-card col-sm-12 ">
          <Image src={rjs} alt="..." className="skill-image" />
          <Image src={js} alt="..." className="skill-image" />
          <Image src={java} alt="..." className="skill-image" />{" "}
          <Image src={ex} alt="..." className="skill-image" />{" "}
          <Image src={node} alt="Profile Pic" className="skill-image" />
          <Image src={mdb} alt="Profile Pic" className="skill-image" />{" "}
          <Image src={html} alt="Profile Pic" className="skill-image" />{" "}
          <Image src={css} alt="Profile Pic" className="skill-image" />{" "}
          <Image src={bst} alt="Profile Pic" className="skill-image" />
          <Image src={R} alt="Profile Pic" className="skill-image" />{" "}
          <Image src={Fapi} alt="Profile Pic" className="skill-image" />
          <Image src={p} alt="Profile Pic" className="skill-image" />{" "}
        </div>
      </div>
    </div>
  );
};
export default Skills;
