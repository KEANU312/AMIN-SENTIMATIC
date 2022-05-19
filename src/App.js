import { Routes, Route } from "react-router-dom";
import { CourseConatiner } from "./components/courseContinaer/course.container.components";
import { NavigationBar } from "./components/nav/navigation-bar.components";
import { SearchBar } from "./components/searchBar/searhbar.components";
import ScrollToTop from "./fun-funtions/ScrollTop.functions";
import { HowTo } from "./routes/AffiliateRoutes/HowTo/howTo.components";
import { Soon } from "./routes/commingSoon/comming-soon.component";
import { About } from "./routes/home/About.components";
import { Paragraph } from "./routes/paragraph/paragraph.components";
import { MainAffiliateLinks, MainCourseList } from "./affiliateJson";
import { useEffect } from "react";
import { MappedAffiliate } from "./components/mappedAffiliate/mapped.affiliate.components";
import { AffiliateRoutes } from "./routes/AffiliateRoutes/affiliateRoutes/affiliateroutes.components";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Paragraph />} />
          <Route path="About" element={<About />} />
          <Route path="Comming-Soon" element={<Soon />} />
          <Route path="Comming-Soon1" element={<Soon />} />
          <Route path="howTo" element={<HowTo />} />
          {MainAffiliateLinks.map(({ headerTitle, explainParaHow }) => {
            console.log(headerTitle);
            return (
              <Route
                path={headerTitle}
                element={
                  <AffiliateRoutes
                    headerTitleFilter={headerTitle}
                    explainParaHowFilter={explainParaHow}
                  />
                }
              />
            );
          })}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
