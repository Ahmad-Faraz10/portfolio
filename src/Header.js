import React from "react";
import { EditIcon } from "@chakra-ui/icons";
const Header = () => {
  return (
    <div className="container header">
      <div className="navhead ">
        <div className="navitem"> Ahmad</div>
        <div className="navendgroup">
          <div className="navitem"> Home</div>
          <div className="navitem"> project</div>
          <div className="navitem">
            <a
              href="https://drive.google.com/file/d/1HIpEsZ-3e8L-uH7xc2QwWDxjnmQkbBqf/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <EditIcon fontSize="20px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
