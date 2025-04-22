import { Image } from "@chakra-ui/react";

const Card = () => {
  return (
    <div className="container cards">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="card-container ">
            <h1 className="text-title">Ahmad Faraz </h1>
            <p className="text-subtitle">
              {" "}
              I am applying for job of full stack developer (Mern Stack
              DeveloperI am applying for job of full stack developer (Mern Stack
              Developer
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-12 col-sm-12  ">
          <div className="profileimage">
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
  );
};
export default Card;
