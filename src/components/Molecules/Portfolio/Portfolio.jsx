import React from "react";
import { Profile } from "../Profile/Profile";
import "./portfolio.css";
export function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio_image">
        <img
          src="https://media.tdc.travel/tdc_media/tmp/new/1569358007.500.Distinction-SOUTH-title-500x300-v2.jpg"
          alt=""
        />
      </div>
      <Profile />
    </div>
  );
}
