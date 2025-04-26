import { Image } from "@chakra-ui/react";

const Card = () => {
  const text = `
  CS Postgrad passionate about Web Dev and Data Science! Love to 
  solve problems using skills.<br />
  Design different themes of pages.<br />
  Enjoy building scalable backends using Node and Express + AWS Lambda.<br />
  Focus on code quality over quantity 💪
`;
  return (
    <div className="container cards">
      <div className="row ">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="card-container ">
            <h1 className="card-title">Ahmad Faraz </h1>
            <h5 className="text-sectitle">Graduate, Full Stack Developer,</h5>
            <p
              className="text-subtitle"
              contentEditable="true"
              dangerouslySetInnerHTML={{ __html: text }}
            ></p>
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
