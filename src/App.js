import { Routes, Route } from "react-router-dom";
import { CourseConatiner } from "./components/courseContinaer/course.container.components";
import { NavigationBar } from "./components/nav/navigation-bar.components";
import { SearchBar } from "./components/searchBar/searhbar.components";
import ScrollToTop from "./fun-funtions/ScrollTop.functions";
import { HowTo } from "./routes/AffiliateRoutes/HowTo/howTo.components";
import { Soon } from "./routes/commingSoon/comming-soon.component";
import { About } from "./routes/home/About.components";
import { Paragraph } from "./routes/paragraph/paragraph.components";

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
          <Route path="test-CC" element={<CourseConatiner />} />
          //Delete Comming-Soon1
        </Route>
      </Routes>
    </div>
  );
}

export default App;
