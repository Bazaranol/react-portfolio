import React from "react";
import "./profile.css";
import { FaPaw } from "react-icons/fa";

export function Profile({ props }) {
  return (
    <div className="profile_container">
      <div className="profile_top">
        <h3 className="profile_top_name">{props.name}</h3>
        <div className="profile_top_date">{props.date}</div>
      </div>
      <div className="profile_middle">
        <div className="profile_middle_top">
          <div>
            <b>Город:</b>
            {props.city}
          </div>
          <div>
            <b>Пол:</b>
            {props.sex}
          </div>
          <div>
            <b>Возраст:</b>
            {props.age}
          </div>
        </div>
        <div className="profile_middle_center">
          <b>О себе:</b> {props.content}
        </div>
        <div className="profile_middle_bottom">
          <b>BTW:</b>
          <FaPaw style={{ color: "#585CC6" }} /> У меня есть кошка:)
        </div>
      </div>
      <div className="profile_bottom">
        <b>Домашнее животное:</b> есть
      </div>
    </div>
  );
}
