import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

// Import images
import {
  default as bg1,
  default as bg2,
  default as bg3,
  default as bg4,
} from "../assets/images/book-with-green-board-background.jpg";

const slides = [
  {
    id: 1,
    bg: bg1,
    title: "Taste Our Delicious",
    subtitle: "Best Foods",
    buttonText: "Order Delicious Food Now!",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
  },
  {
    id: 2,
    bg: bg2,
    title: "Discover Amazing",
    subtitle: "Food Deals",
    buttonText: "Explore Menu",
    description:
      "Enjoy the best food at unbeatable prices and top-notch taste.",
  },
  {
    id: 3,
    bg: bg3,
    title: "Fresh & Organic",
    subtitle: "Straight From Farm",
    buttonText: "Check Today's Specials",
    description: "Freshly prepared meals using the best organic ingredients.",
  },
  {
    id: 4,
    bg: bg4,
    title: "Quick Delivery",
    subtitle: "Right To Your Door",
    buttonText: "Get It Now",
    description:
      "Lightning-fast delivery and steaming hot meals at your doorstep.",
  },
];

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={2000}
      transitionTime={300}
      swipeable
    >
      {slides.map((slide) => (
        <div key={slide.id}>
          <div
            style={{ backgroundImage: `url(${slide.bg})` }}
            className="h-[80vh] bg-cover bg-center relative"
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {slide.title} <br /> {slide.subtitle}
              </h2>
              <Link to="/menu">
                <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded my-4">
                  {slide.buttonText}
                </button>
              </Link>
              <p className="max-w-xl">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

// clg

export default Banner;
