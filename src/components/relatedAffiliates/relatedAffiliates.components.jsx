import "./relatedAffiliates.styles.scss";
import { Link } from "react-router-dom";

export const RelatedBar = () => {
  const affiliateRoutes = [
    {
      courseName: "How Does this website Built?",
      image:
        "https://lh3.googleusercontent.com/Wgpt-CWoOY--Z3x031vyIisc_n1MNHra3xEwjhXNx10szPOnzeTx6fEOLlfxq8GSuZmRVYaTk3cLtqKws7uabXU8OPMa7Drt9kvXqBC52sCBx8zceINaZKGNxzTgXJ-Om-Fl8AbW8Q=w2400",
    },
    {
      courseName: "How Does this website Built?",
      image:
        "https://lh3.googleusercontent.com/Wgpt-CWoOY--Z3x031vyIisc_n1MNHra3xEwjhXNx10szPOnzeTx6fEOLlfxq8GSuZmRVYaTk3cLtqKws7uabXU8OPMa7Drt9kvXqBC52sCBx8zceINaZKGNxzTgXJ-Om-Fl8AbW8Q=w2400",
    },
    {
      courseName: "How Does this website Built?",
      image:
        "https://lh3.googleusercontent.com/Wgpt-CWoOY--Z3x031vyIisc_n1MNHra3xEwjhXNx10szPOnzeTx6fEOLlfxq8GSuZmRVYaTk3cLtqKws7uabXU8OPMa7Drt9kvXqBC52sCBx8zceINaZKGNxzTgXJ-Om-Fl8AbW8Q=w2400",
    },
  ];

  return (
    <div className="related-main-container">
      <div className="related-post-p">Related Post</div>
      <div className="rd-course-container">
        {affiliateRoutes.map(({ courseName, image }) => {
          return (
            <div className="rr-image-container">
              <Link to="/" className="rr-link">
                <img src={image} alt="courseImage" className="rr-img" />
                <p className="rr-course-name">{courseName}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
