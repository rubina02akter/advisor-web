// import Slider from '../components/Slider';
// import CategorySlider from "../components/CategorySlider";
// import ServicesSection from "../components/ServicesSection";
// import CourseCardGrid from "../components/CourseCardGrid";
import FaqSection from "../components/FaqSection";
import Category from "../components/Category";
import Courses from "../components/Courses";
import ChooseUs from "../components/ChooseUs";
import MarqueeHeading from "../components/MarqueeHeading";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div>
      <MarqueeHeading />

      <div className="">
        <Banner />
        <Category />
        <Courses />
        <ChooseUs />
        <FaqSection />
        {/* <Slider /> */}
      </div>
      {/* to do */}
      {/* <CategorySlider /> */}

      {/* <ServicesSection /> */}
      {/* <CourseCardGrid />  */}
    </div>
  );
}
