import React, { useEffect, useState } from "react";
import Integrationlogo from "./Group.png";
import { CiSearch } from "react-icons/ci";
import "./integration.css";
import Dashboard from "../../components/dashboard/dashboard";
import Nothing from "../../components/Nothing/Nothing";

const Integration = () => {
  const [buttonStates, setButtonStates] = useState({
    allApps: false,
    connected: false,
    disconnected: false,
  });

  const handleButtonClick = (buttonName) => {
    setButtonStates((prevState) => ({
      ...prevState,
      allApps: buttonName === "allApps" ? true : false,
      connected: buttonName === "connected" ? true : false,
      disconnected: buttonName === "disconnected" ? true : false,
    }));
  };
  useEffect(() => {
    // Run code here when the component mounts to set default state
    // In this case, we want the Dashboard to be rendered by default
    setButtonStates({
      allApps: true,
      connected: false,
      disconnected: false,
    });
  }, []);
  return (
    <div className="flex flex-col gap-5 integrate_size integration">
      <div className="flex items-center gap-3">
        <img
          src={Integrationlogo}
          alt="Integration"
          width={50}
          height={50}
          className="svg_border"
        />
        <div className="flex flex-col gap-1">
          <h2 className="integrate_text">Integrations</h2>
          <p className="integrtae_paragraph">
            Connect and sync essential tools and platforms
          </p>
        </div>
      </div>

      <div className="flex justify-between button_width">
        <div className="flex gap-12 bg_button">
          <button
            className={buttonStates.allApps ? "bg_black_btn" : "bg_transparent"}
            onClick={() => handleButtonClick("allApps")}
          >
            All Apps
          </button>
          <button
            className={
              buttonStates.connected ? "bg_black_btn" : "bg_transparent"
            }
            onClick={() => handleButtonClick("connected")}
          >
            Connected
          </button>
          <button
            className={
              buttonStates.disconnected ? "bg_black_btn" : "bg_transparent"
            }
            onClick={() => handleButtonClick("disconnected")}
          >
            Disconnected
          </button>
        </div>

        <div className="flex items-center gap-3 search_div">
          <CiSearch />
          <input
            type="search"
            placeholder="Search"
            className="outline-none bg-transparent w-full"
          />
        </div>
      </div>
      
      <div>
        <h2 className="integrate_text">Available Integrations</h2>
        <p className="integrtae_paragraph">
          Access all the integrated tools and apps ready for needed to scale AR
          & Virtual Try-On on your website or online store
        </p>
      </div>
      
      <div className="dashboard">
        {buttonStates.allApps ? <Dashboard /> : null}
        {(buttonStates.connected || buttonStates.disconnected) && <Nothing />}
      </div>
    </div>
  );
};

export default Integration;
