import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ title, courseCount, icon, gradient }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-8 cursor-pointer ${gradient} min-h-[280px] flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/20 blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-white/10 blur-lg"></div>
      </div>
      
      {/* Icon Container */}
      <div className="relative z-10 mb-6">
        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-white text-2xl">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2">
          {title}
        </h3>
        <p className="text-white/80 text-sm mb-4">
          {courseCount} Course{courseCount !== 1 ? 's' : ''} available
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-white/90 text-sm font-medium">Explore Courses</span>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;