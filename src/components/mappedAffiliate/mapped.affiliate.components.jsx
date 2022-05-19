import { CourseConatiner } from "../courseContinaer/course.container.components";
import { RelatedBar } from "../relatedAffiliates/relatedAffiliates.components";
import "./mapped.affiliate.componnets.scss";
import { useEffect } from "react";

export const MappedAffiliate = ({
  headerTitle,
  authorNmae,
  mappedDate,
  explainPara,
  testList,
}) => {
  // useEffect(() => {
  //   console.log(window.innerWidth);
  // }, []);

  return (
    <div className="main-howTo-mainContianer">
      <div className="howTo-main-container">
        <p className="howTo-header">{headerTitle}</p>
        <p className="author-howTo">
          By {authorNmae} published{" "}
          {`${mappedDate.getMonth()}/${mappedDate.getDate()}/${mappedDate.getFullYear()}`}
        </p>
        <p className="para-explian">{explainPara}</p>
        <div className="course-container">
          <CourseConatiner courseTestList={testList} />
        </div>
      </div>
      <div className="related-bar-howTo">
        <RelatedBar />
      </div>
    </div>
  );
};
