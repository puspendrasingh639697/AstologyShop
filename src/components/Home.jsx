import React from "react";
import HeroSection from "../components/HeroSection";
import ShopByCategory from "../components/ShopByCategory";
import AstrologyRemedies from "../components/AstrologyRemedies";
import ShopByCollection from "../components/ShopByCollection";
import PersonalizedRecommendations from "../components/PersonalizedRecommendations";
import MediaInNews from "../components/MediaInNews";
import CustomerReviews from "../components/CustomerReviews";
import SpiritualBlog from "../components/SpiritualBlog";
import LatestTrending from "../components/LatestTrending";
import DivineWisdomHub from "../components/DivineWisdomHub";
import FAQSection from "../components/FAQSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import SimpleBanner from "../pages/SimpleBanner";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ShopByCategory />
      
      <ShopByCollection />
      {/* <PersonalizedRecommendations /> */}
      <MediaInNews />
      <AstrologyRemedies />
      <CustomerReviews />
      <SpiritualBlog />

      <SimpleBanner/>
      <LatestTrending />
      {/* <DivineWisdomHub /> */}
      <WhyChooseUsSection/>
      <FAQSection />
    </>
  );
};

export default Home;