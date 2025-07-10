

const PartnersSection = () => {
  const partnerLogos = [
    { name: "University", logo: "https://i.ibb.co/KxZ6NJsV/logo.jpg" },
    { name: "Academy", logo: "https://i.ibb.co/KxZ6NJsV/logo.jpg" },
    { name: "University", logo: "https://i.ibb.co/KxZ6NJsV/logo.jpg" },
    { name: "Academy", logo: "https://i.ibb.co/KxZ6NJsV/logo.jpg" },
    { name: "University", logo: "https://i.ibb.co/KxZ6NJsV/logo.jpg" },
    { name: "Academy", logo: "https://i.ibb.co/KxZ6NJsV/logo.jpg" },
    { name: "University", logo: "https://i.ibb.co/KxZ6NJsV/logo.jpg" },
    { name: "Academy", logo: "https://i.ibb.co/KxZ6NJsV/logo.jpg" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-[url('https://i.ibb.co/v6XsYYYc/partner.webp')] bg-cover bg-center">
      <div className="max-w-6xl w-full bg-white bg-opacity-90 rounded-xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Text content (1/3 width) */}
          <div className="md:w-1/3 p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
              Our Global Honorable Partners
            </h2>
            <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8">
              Global partners has been publishing the course you want, in the way you want - always
              have full control.
            </p>
            <div className="text-xl lg:text-2xl font-semibold text-primary">
              9,500+ businesses and students around the world
            </div>
          </div>

          {/* Right side - Partner logos (2/3 width) */}
          <div className="md:w-2/3 bg-gray-50 p-8 lg:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {partnerLogos.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-2 lg:p-4 bg-white rounded-lg hover:shadow-md transition-all"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-12 lg:h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;