import "./course.container.styles.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const CourseConatiner = ({ courseTestList }) => {
  let mapNum = 0;

  return (
    <div className="main-cc-container">
      {courseTestList.map(({ image, courseName, review, courseLink }) => {
        return (
          <div className="cc-map-container">
            <p className="num-p">{(mapNum += 1)}</p>
            <img src={image} alt="course image" className="cc-img howTo-img" />
            <p className="course-name-cc">{courseName}</p>
            <p className="course-review-cc">{review}</p>
            <a href={courseLink} target="_blank" className="course-link-cc">
              Visit Website Here!!!
            </a>
          </div>
        );
      })}
    </div>
  );
};
