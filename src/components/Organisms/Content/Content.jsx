import React from "react";
import { Review } from "../../Atoms/Review/Review";
import { Portfolio } from "../../Molecules/Portfolio/Portfolio";
import { ReviewsWindow } from "../../Molecules/ReviewsWindow/ReviewsWindow";
import "./content.css";
export function Content({ props }) {
  // const props = {
  //   name="Роман Сидоркин"
  //   date="04.07.2000"
  //   city="Томск"
  //   sex="мужчина"
  //   age="21"
  // };

  return (
    <main className="main">
      <div className="about">
        <h1>
          Добро пожаловать
          <br /> в академию!!
        </h1>
      </div>
      <Portfolio props={props} />
      <ReviewsWindow />
    </main>
  );
}
