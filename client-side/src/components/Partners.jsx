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
    <div className="w-full bg-gray-50 flex items-center justify-center mt-4 mb-16">
      <div className=" w-full bg-opacity-90 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* Left side - With background image */}
          <div
            className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-[url('https://i.ibb.co/v6XsYYYc/partner.webp')] bg-cover bg-center text-black"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
              Our Global Honorable Partners
            </h2>
            <p className="text-base lg:text-lg mb-6 lg:mb-8">
              Global partners has been publishing the course you want, in the way you want - always
              have full control.
            </p>
            <div className="text-xl lg:text-2xl font-semibold">
              9,500+ businesses and students around the world
            </div>
          </div>

          {/* Right side - Logos only (no bg image) */}
          <div className="md:w-1/2 bg-gray-50 p-8 lg:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {partnerLogos.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-2 lg:p-4 rounded-lg hover:shadow-md transition-all"
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
