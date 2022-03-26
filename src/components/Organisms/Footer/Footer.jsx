import React from "react";
import "./footer.css";
import { FaVk, FaReddit, FaTelegram } from "react-icons/fa";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer_creators">
        © iLINK ACADEMY. ALL RIGHTS RESERVED. 2022
      </div>
      <div className="footer_links">
        <a href="https://vk.com">
          <FaVk className="footer_icon" />
        </a>
        <a href="https://reddit.com">
          <FaReddit className="footer_icon" />
        </a>
        <a href="https://telegram.me/bazaranol">
          <FaTelegram className="footer_icon" />
        </a>
      </div>
    </div>
  );
}
