import React from "react";
import { Image } from "semantic-ui-react";

import logo from "../../images/logo.png";

const MainHeader = () => {
  return (
    <div id="mainHeader" className="main-header">
      <Image className="main-logo" src={logo} />
    </div>
  );
};

export default MainHeader;
