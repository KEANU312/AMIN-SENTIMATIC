import "../../../components/mappedAffiliate/mapped.affiliate.components";
import { MappedAffiliate } from "../../../components/mappedAffiliate/mapped.affiliate.components";
import { MainCourseList, MainAffiliateLinks } from "../../../affiliateJson";
import { useEffect } from "react";

export const AffiliateRoutes = ({
  headerTitleFilter,
  explainParaHowFilter,
}) => {
  //   const testMain = MainAffiliateLinks.map(
  //     ({ headerTitle, authorNmae, mappedDate, explainParaHow, testList }) => {
  //   const testDiv = (
  //     <div>
  //       <MappedAffiliate
  //         headerTitle={headerTitle}
  //         authorNmae={authorNmae}
  //         mappedDate={mappedDate}
  //         explainPara={explainParaHow}
  //         testList={testList}
  //       />
  //     </div>
  //   );
  //       if (headerTitleFilter === headerTitle) {
  //         return (
  //           <div>
  //             <MappedAffiliate
  //               headerTitle={headerTitle}
  //               authorNmae={authorNmae}
  //               mappedDate={mappedDate}
  //               explainPara={explainParaHow}
  //               testList={testList}
  //             />
  //           </div>
  //         );
  //       }
  //     }
  //   );
  const forMain = () => {
    for (let i of MainAffiliateLinks) {
      if (
        (i.headerTitle === headerTitleFilter) &
        (i.explainParaHow === explainParaHowFilter)
      ) {
        const {
          headerTitle,
          authorNmae,
          mappedDate,
          explainParaHow,
          testList,
        } = i;
        const testMainDiv = (
          <div>
            <MappedAffiliate
              headerTitle={headerTitle}
              authorNmae={authorNmae}
              mappedDate={mappedDate}
              explainPara={explainParaHow}
              testList={testList}
            />
          </div>
        );
        return testMainDiv;
      }
    }
  };

  //   console.log(testMain.length);
  //   useEffect(() => {
  //     let headerTitle1 = "hkjhk";
  // const testMain = MainAffiliateLinks.map(
  //   ({ headerTitle, authorNmae, mappedDate, explainParaHow, testList }) => {
  //     headerTitle1 = headerTitle;
  //     const testDiv = (
  //       <div>
  //         <MappedAffiliate
  //           headerTitle={headerTitle}
  //           authorNmae={authorNmae}
  //           mappedDate={mappedDate}
  //           explainPara={explainParaHow}
  //           testList={testList}
  //         />
  //       </div>
  //     );
  //     return (
  //       <div>
  //         <MappedAffiliate
  //           headerTitle={headerTitle}
  //           authorNmae={authorNmae}
  //           mappedDate={mappedDate}
  //           explainPara={explainParaHow}
  //           testList={testList}
  //         />
  //       </div>
  //     );
  //   }
  // );
  //   }, []);

  return forMain();
};
