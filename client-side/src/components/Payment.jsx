
const merchants = [
  {
    name: "bKash",
    img: "https://i.ibb.co/TMV7cf9w/bkash.png", // Update this path based on your project
    numbers: ["01857430707", "01630608928"],
  },
  {
    name: "Nagad",
    img: "https://i.ibb.co/1YZGm11t/nagad-marchant.png",
    numbers: ["01857430707", "01630608928"],
  },
  {
    name: "Rocket",
    img: "https://i.ibb.co/7JLjWKdK/rocket.png",
    numbers: ["01857430707", "01630608928"],
  },
];

const Payment = () => {
  return (
    <div className="text-center py-10 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-8">Our <span className="text-[#22C3F2]">Payment</span> Merchants</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        {merchants.map((merchant, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 w-[260px]"
          >
            <img
              src={merchant.img}
              alt={merchant.name}
              className="w-28 mx-auto mb-4"
            />
            {merchant.numbers.map((number, i) => (
              <p key={i} className="text-base font-medium text-gray-800">
                {number}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
