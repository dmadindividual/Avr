import React, { useState } from "react";
import "./Sidebar.css";
import { ReactComponent as HomeLogo } from "./Home.svg";
import { ReactComponent as PresentLogo } from "./Present.svg";
import { ReactComponent as Settings } from "./Settings.svg";
import Integrations from "./integrations.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const IconText = ["Home", "Products", "Integrations", "Settings"];

const Icons = [
  <HomeLogo width={20} className="custom_svg" />,
  <PresentLogo width={20} className="custom_svg" />,
  <img src={Integrations} width={20} alt="Integrations" />,
  <Settings className="custom_svg" width={20} />,
];

const Sidebar = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (index) => {
    setSelectedIcon(index);
  };

  return (
    <div className="sidebar flex justify-between flex-col">
      <div className="sidebar_container ">
        <div className="sidebar_icons">
          {IconText.map((text, index) => (
            <div
              key={index}
              className={`flex gap-4 items-center cursor-pointer hover_state ${
                selectedIcon === index ? "icon_hover" : ""
              }`}
              onClick={() => handleIconClick(index)}
            >
              {Icons[index]}{" "}
              {/* Assuming IconText and Icons are of same length */}
              <span className="span_text">{text}</span>
            </div>
          ))}
        </div>
  

      </div>
      <div className="flex flex-col gap-5 text-white">
       <a href="Topg.com" className="flex items-center gap-1">Documentation <FaExternalLinkAlt/></a>
       <a href="Topg.com" className="flex items-center gap-1">Tutorial <FaExternalLinkAlt/></a>
       <button className="ugrade_btn m-0">Upgrade to Starter <span className="starter">PRO</span></button>
        </div>

    </div>
  );
};

export default Sidebar;
