import React from "react";
import "./profile.css";
import { FaPaw } from "react-icons/fa";

export function Profile() {
  return (
    <div className="profile_container">
      <div className="profile_top">
        <div className="profile_top_name">Яна Валиева</div>
        <div className="profile_top_date">08.10.1999</div>
      </div>
      <div className="profile_middle">
        <div className="profile_middle_top">
          <div>
            <b>Город:</b>Томск
          </div>
          <div>
            <b>Пол:</b>Женщина
          </div>
          <div>
            <b>Возраст:</b>22
          </div>
        </div>
        <div className="profile_middle_center">
          <b>О себе:</b> Всем привет! Меня зовут Яна, мне 22 года, я студент.
          Учусь на программиста, но хочу стать продуктовым аналитиком. Недавно,
          например, я начала проходить курс на известной платформе, который
          поможет мне устроиться на работу моей мечты!
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
