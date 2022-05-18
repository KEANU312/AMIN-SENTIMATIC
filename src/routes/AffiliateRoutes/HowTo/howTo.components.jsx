import "./howTo.styles.scss";
import "../../../components/mappedAffiliate/mapped.affiliate.components";
import { MappedAffiliate } from "../../../components/mappedAffiliate/mapped.affiliate.components";

export const HowTo = () => {
  const date = new Date(2022, 5, 17);

  const testList = [
    {
      image:
        "https://lh3.googleusercontent.com/Wgpt-CWoOY--Z3x031vyIisc_n1MNHra3xEwjhXNx10szPOnzeTx6fEOLlfxq8GSuZmRVYaTk3cLtqKws7uabXU8OPMa7Drt9kvXqBC52sCBx8zceINaZKGNxzTgXJ-Om-Fl8AbW8Q=w2400",
      courseName: "Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)",
      review:
        "This course focuses on efficiency and making you into a Back End or Fullstack developer using the \
      latest version of Node. Never waste time on unclear, outdated, or inadequate tutorials again! Students who \
      completed Andrei's classes are now employed by Google. Tesla, Amazon, and Apple, to name a few.\
      There's a reason IBM, JP Morgan, Facebook, and other top tech companies exist ",
      courseLink: "https://www.labnol.org/embed/google/photos/",
    },
    {
      image:
        "https://lh3.googleusercontent.com/c6ZMJnYdHWPjITzzw-oiT3rYtcdXL27QHuhH7w-R7N7gAD--RcIe_CybwkJ2GdSDEY9LQ75t6n3FiG5f6qiQaoX23VJjFkuNDU2Mha_DTU7DnE8LB9h-kilOXGzlAI58tmYgLgOa2A=w2400",
      courseName:
        "Complete NodeJS Developer in 2022 (GraphQL, MongoDB, + more)",
      review:
        "This course focuses on efficiency and making you into a Back End or Fullstack developer using the \
      latest version of Node. Never waste time on unclear, outdated, or inadequate tutorials again! Students who \
      completed Andrei's classes are now employed by Google. Tesla, Amazon, and Apple, to name a few.\
      There's a reason IBM, JP Morgan, Facebook, and other top tech companies exist ",
      courseLink:
        "https://stackoverflow.com/questions/42914666/react-router-external-link",
    },
    {
      image:
        "https://lh3.googleusercontent.com/c6ZMJnYdHWPjITzzw-oiT3rYtcdXL27QHuhH7w-R7N7gAD--RcIe_CybwkJ2GdSDEY9LQ75t6n3FiG5f6qiQaoX23VJjFkuNDU2Mha_DTU7DnE8LB9h-kilOXGzlAI58tmYgLgOa2A=w2400",
      courseName:
        "Complete NodeJS Developer in 2022 (GraphQL, MongoDB, + more)",
      review:
        "This course focuses on efficiency and making you into a Back End or Fullstack developer using the \
      latest version of Node. Never waste time on unclear, outdated, or inadequate tutorials again! Students who \
      completed Andrei's classes are now employed by Google. Tesla, Amazon, and Apple, to name a few.\
      There's a reason IBM, JP Morgan, Facebook, and other top tech companies exist ",
      courseLink: "sdfsda.com",
    },
    {
      image:
        "https://lh3.googleusercontent.com/Wgpt-CWoOY--Z3x031vyIisc_n1MNHra3xEwjhXNx10szPOnzeTx6fEOLlfxq8GSuZmRVYaTk3cLtqKws7uabXU8OPMa7Drt9kvXqBC52sCBx8zceINaZKGNxzTgXJ-Om-Fl8AbW8Q=w2400",
      courseName: "Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)",
      review:
        "This course focuses on efficiency and making you into a Back End or Fullstack developer using the \
      latest version of Node. Never waste time on unclear, outdated, or inadequate tutorials again! Students who \
      completed Andrei's classes are now employed by Google. Tesla, Amazon, and Apple, to name a few.\
      There's a reason IBM, JP Morgan, Facebook, and other top tech companies exist ",
      courseLink: "https://www.labnol.org/embed/google/photos/",
    },
  ];

  // return (
  //   <div className="main-howTo-mainContianer">
  //     <div className="howTo-main-container">
  //       <p className="howTo-header">How Does this website Work?</p>
  //       <p className="author-howTo">
  //         By Kenau Gaynor published{" "}
  //         {`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}
  //       </p>
  //       <p className="para-explian">
  //         The front end of this website was developed with React, the back end
  //         with Node JS, and the sentiment analysis was done with Python Fastapi.
  //         This website is hosted on Hostinger. For more information about the
  //         finest web hosting sites, visit this {`link`}. The courses I utilized
  //         to build this website from the ground up are listed below.
  //       </p>
  //       <div className="course-container">
  //         <CourseConatiner courseTestList={testList} />
  //       </div>
  //     </div>
  //     <div className="related-bar-howTo">
  //       <RelatedBar />
  //     </div>
  //   </div>
  // );
  const headerTitleHow = "How Does this website Built?";
  const explainParaHow = `The front end of this website was developed with React, the back end 
          with Node JS, and the sentiment analysis was done with Python Fastapi. 
          This website is hosted on Hostinger. For more information about the 
          finest web hosting sites, visit this ${`link`}. The courses I utilized 
          to build this website from the ground up are listed below.`;

  return (
    <div>
      <MappedAffiliate
        headerTitle={headerTitleHow}
        authorNmae="Keanu Gaynor"
        mappedDate={new Date(2022, 5, 17)}
        explainPara={explainParaHow}
        testList={testList}
      />
    </div>
  );
};
