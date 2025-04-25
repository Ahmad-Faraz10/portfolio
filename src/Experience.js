const Experience = () => {
  return (
    <div className="container">
      <div className="Exp-container">
        <div className="text-title text-center project-title">
          <h1 className="project-title">Experience</h1>
        </div>
        <div className="ex-card col-sm-12 ">
          <h1 className="ex-head">Software Developer</h1>
          <h3 className="ex-sub">
            OBB <span className="text-white">Lucknow U.P.</span>
          </h3>

          <h6 className=" text-white">(Oct. 2023 to Nov 2024)</h6>
          <ul className="ex-subtitle">
            <li>
              Developed full-stack web applications using the MERN stack.{" "}
            </li>
            <li>Implemented RESTful APIs to handle data req and responses. </li>
            <li>
              Collaborated with cross functional teams to deliver high quality
              software products.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Experience;
