// import Slider from '../components/unused/Slider';
// import CategorySlider from "../components/unused/CategorySlider";
// import ServicesSection from "../components/unused/ServicesSection";
// import CourseCardGrid from "../components/CourseCardGrid";
import Banner from "../components/Banner";
import Category from "../components/Category";
import ChooseUs from "../components/ChooseUs";
import Courses from "../components/Courses";
import FaqSection from "../components/FaqSection";
import MarqueeHeading from "../components/MarqueeHeading";
import Partners from "../components/Partners";
// import CategorySec from "../components/unused/CategorySec";


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
        <Partners></Partners>
        {/* <CategorySec></CategorySec> */}
        {/* <Slider /> */}
      </div>
      {/* to do */}
      {/* <CategorySlider /> */}

      {/* <ServicesSection /> */}
      {/* <CourseCardGrid />  */}
    </div>
  );
}
