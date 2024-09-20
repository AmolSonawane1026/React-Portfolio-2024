import React from "react";
import "./MyServices.css";

import MyServicesData from "./MyServicesData";
const MyServices = () => {
  return (
    <>
      <div className="mainMyServicesDiv">
        {MyServicesData.map((item) => {
          return (
            <>
              <div className="card" key={item.id}>
                <a className="card1">
                  <img src={item.ServiceIcon} alt="WebDevelopment" />
                  <h1>{item.ServiceTitle}</h1>
                  <p className="small">{item.ServiceDescription}</p>
                  <div className="go-corner">
                    <div className="go-arrow"></div>
                  </div>
                </a>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MyServices;
