import React from "react";
import { Button } from "../../Atoms/Button/Button";
import "./header.css";

export function Header() {
  return (
    <div className="header">
      <div className="profile">
        <div className="profile_img">
          <img src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1" />
        </div>
        <div className="profile_name">
          <div>Name Surname</div>
        </div>
      </div>
      <div className="logo">
        <div className="logo_top">ilink</div>
        <div className="logo_bottom">ACADEMY</div>
      </div>
      <div className="menu">
        <Button> Панель Управления</Button>
      </div>
    </div>
  );
}
