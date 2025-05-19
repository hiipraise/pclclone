import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import NewsLetter from "../../components/sections/newsletter";
import WhoWeAreSection from "../../components/sections/whoweare";
import WorkTogether from "../../components/sections/worktogether";
import OurOwners from "../../components/sections/ourowners";
import WhatWedo from "../../components/sections/whatwedo";
import Safety from "../../components/sections/safety";
import WhatWeBuild from "../../components/sections/whatwebuild";
import Careers from "../../components/sections/careers";
import WhereWework from "../../components/sections/wherewework";
import FeatureNews from "../../components/featuresnews/featurenews";
import AdvancedSlideshow from "../../components/advancedslideshow/advancedslideshow";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <AdvancedSlideshow />
      </div>
      <WhoWeAreSection />
      <WhereWework />
      <WhatWedo />
      <WhatWeBuild />
      <Careers />
      <OurOwners />
      <Safety />
      <FeatureNews />
      <WorkTogether />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
