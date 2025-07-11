import bg from '../../src/assets/images/medium-shot-man-wearing-vr-glasses.jpg';
export default function Header() {
  return (
    <div className='pt-8 '>
      <div
        className="relative bg-cover bg-center py-16 rounded-2xl text-white h-[550px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute rounded-2xl inset-0 bg-black opacity-50"></div>
      
      </div>

      <div>
    {/* bangla card testing */}
    {/* <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200 font-sans">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">বাংলা কার্ড</h2>
      <p className="text-gray-700">
        এই কার্ডটি React এবং Tailwind CSS দিয়ে তৈরি। আপনি এটি যেকোনো প্রোজেক্টে ব্যবহার করতে পারেন বাংলা কনটেন্ট দেখানোর জন্য।
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        আরও জানুন
      </button>
    </div> */}
      </div>
    </div>
  );
}
