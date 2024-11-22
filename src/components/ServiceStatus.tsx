import React from "react";
import { Link } from "react-router-dom";

const ServiceStatus: React.FC = () => {
  return (
    <React.Fragment>
      {/* Update the Link to point to your GitHub profile */}
      <Link to="https://github.com/Qalandar-Bux1" target="_blank" rel="noopener noreferrer">
        <div className="status p-4 rounded-xl flex flex-row items-center cursor-pointer">
          <div className="status-icon w-[2rem] h-[2rem] rounded-3xl relative mr-4">
            {/* Static icon representation */}
            <div
              className="status-icon-inner absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-[inherit]"
            ></div>
            <div
              className="status-icon-wave w-[inherit] h-[inherit] rounded-[inherit] bg-blue-500 animate-ping"
            ></div>
          </div>
          <p className="status-text !text-blue-500">
            Visit My GitHub Profile
          </p>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default ServiceStatus;
