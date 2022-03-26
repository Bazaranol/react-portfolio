import React from "react";
import "./review.css";

export function Review(props) {
  return (
    <div className="review">
      <div className="review_title">
        <div className="review_title_left">
          <div className="review_img">
            <img src={props.url} alt="" />
          </div>
          <div className="review_name">{props.name}</div>
        </div>
        <div className="review_title_right">
          <div className="review_date">{props.date}</div>
        </div>
      </div>
      <div className="review_content">{props.content}</div>
    </div>
  );
}
