import { Image } from "@chakra-ui/react";
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
              <Image
                src="../img/pic.jpg"
                alt="Profile Pic"
                width="300px"
                height="300px"
                style={{ borderRadius: "12px" }}
              />
            </div>
          </div>{" "}
          <div className="col-lg-6 col-sm-12 col-md-12">
            <div className="pro-card">
              <Image
                src="../img/pic.jpg"
                alt="Profile Pic"
                width="300px"
                height="300px"
                style={{ borderRadius: "12px" }}
              />
            </div>
          </div>{" "}
          <div className="col-lg-6 col-sm-12 col-md-12">
            <div className="pro-card">
              <Image
                src="../img/pic.jpg"
                alt="Profile Pic"
                width="300px"
                height="300px"
                style={{ borderRadius: "12px" }}
              />
            </div>
          </div>{" "}
          <div className="col-lg-6 col-sm-12 col-md-12">
            <div className="pro-card">
              <Image
                src="../img/pic.jpg"
                alt="Profile Pic"
                width="300px"
                height="300px"
                style={{ borderRadius: "12px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
