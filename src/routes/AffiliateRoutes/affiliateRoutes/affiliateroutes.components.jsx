import "../../../components/mappedAffiliate/mapped.affiliate.components";
import { MappedAffiliate } from "../../../components/mappedAffiliate/mapped.affiliate.components";
import { MainCourseList, MainAffiliateLinks } from "../../../affiliateJson";
import { useEffect } from "react";

export const AffiliateRoutes = ({
  headerTitleFilter,
  explainParaHowFilter,
}) => {
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

  return forMain();
};
