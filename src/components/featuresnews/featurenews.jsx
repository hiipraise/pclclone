import React from "react";
import FeaturedInsights from "../sections/featuredinsights";
import LatestNews from "../sections/latestnews";

const FeatureNews = () => {
  return (
    <div className="sm:p-[5vw] px-[5vw] py-20 flex flex-col gap-10">
      <FeaturedInsights />
      <LatestNews />
    </div>
  );
};

export default FeatureNews;
