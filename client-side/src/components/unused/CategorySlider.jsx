import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Icons (same as before)
const MarketingIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8"><path d="M12 2L13.09 8.26L20.5 7L19.26 13.09L12 14L4.74 13.09L3.5 7L10.91 8.26L12 2Z"/><path d="M12 14V22L4.74 21.09L6 15L12 14Z"/></svg>;
const DevelopmentIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8"><path d="M8 3L4 7L8 11L9.4 9.6L7.8 8H16V6H7.8L9.4 4.4L8 3Z"/><path d="M16 13L20 17L16 21L14.6 19.6L16.2 18H8V16H16.2L14.6 14.4L16 13Z"/><rect x="2" y="12" width="20" height="2"/></svg>;
const BusinessIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8"><path d="M3 3V21H21V3H3ZM19 19H5V5H19V19Z"/><path d="M7 7H17V9H7V7Z"/><path d="M7 11H17V13H7V11Z"/><path d="M7 15H13V17H7V15Z"/></svg>;
const DesignIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8"><path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/></svg>;
const PhotographyIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8"><path d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 7C14.76 7 17 9.24 17 12S14.76 17 12 17S7 14.76 7 12S9.24 7 12 7Z"/></svg>;

const categories = [
  { id: 1, title: "Marketing", courseCount: 14, icon: <MarketingIcon />, gradient: "bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500" },
  { id: 2, title: "Development", courseCount: 22, icon: <DevelopmentIcon />, gradient: "bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500" },
  { id: 3, title: "Business", courseCount: 13, icon: <BusinessIcon />, gradient: "bg-gradient-to-br from-green-500 via-emerald-600 to-teal-500" },
  { id: 4, title: "Design", courseCount: 18, icon: <DesignIcon />, gradient: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-500" },
  { id: 5, title: "Photography", courseCount: 9, icon: <PhotographyIcon />, gradient: "bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-500" }
];

const CategorySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);
  
  // The minimum swipe distance to trigger slide change
  const minSwipeDistance = 50; 

  // Handle touch events for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(true);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = (auto = false) => {
    setCurrentIndex(prev => {
      if (prev >= categories.length - 1) {
        if (auto) return 0; // Reset for auto-slide
        return prev;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? 0 : prev - 1));
  };

  // Calculate the transform value for the slider
  const getTransformValue = () => {
    if (window.innerWidth >= 1024) {
      return `translateX(-${currentIndex * 33.33}%)`; // 3 items per view
    } else if (window.innerWidth >= 768) {
      return `translateX(-${currentIndex * 50}%)`; // 2 items per view
    } else {
      return `translateX(-${currentIndex * 100}%)`; // 1 item per view
    }
  };

  return (
    <div className="relative py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            ----Explore Categories----
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Browse through our popular course categories
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= categories.length - 1}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Slider Track */}
          <div 
            ref={sliderRef}
            className="relative w-full overflow-visible"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: getTransformValue() }}
            >
              {categories.map((category, index) => (
                <div 
                  key={category.id}
                  className={`
                    flex-shrink-0 px-2
                    ${window.innerWidth >= 1024 ? 'w-1/3' : window.innerWidth >= 768 ? 'w-1/2' : 'w-full'}
                  `}
                >
                  <div className="px-2">
                    <CategoryCard
                      title={category.title}
                      courseCount={category.courseCount}
                      icon={category.icon}
                      gradient={category.gradient}
                      isActive={index === currentIndex}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ title, courseCount, icon, gradient, isActive }) => {
  return (
    <div
      className={`
        rounded-2xl p-6 shadow-lg ${gradient} text-white cursor-pointer 
        transition-all duration-300 transform
        ${isActive ? 'scale-105 opacity-100' : 'scale-95 opacity-80'}
        hover:scale-110 hover:opacity-100
      `}
      tabIndex={0}
      role="button"
      aria-label={`${title} category with ${courseCount} courses`}
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-sm opacity-90">{courseCount} Courses</p>
    </div>
  );
};

export default CategorySlider;