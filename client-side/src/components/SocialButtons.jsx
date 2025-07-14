import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialButtons = () => (
  <div className="flex flex-col gap-2">
    <div className="flex flex-row gap-2">
      {/* Instagram */}
      <button
        className="w-[90px] h-[90px] outline-none border-none bg-white rounded-[90px_5px_5px_5px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#cc39a4] group flex items-center justify-center"
      >
        <FaInstagram className="mt-6 ml-5 text-[#cc39a4] group-hover:text-white text-[30px]" />
      </button>

      {/* Twitter */}
      <button
        className="w-[90px] h-[90px] outline-none border-none bg-white rounded-[5px_90px_5px_5px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#03A9F4] group flex items-center justify-center"
      >
        <FaTwitter className="mt-6 -ml-4 text-[#03A9F4] group-hover:text-white text-[30px]" />
      </button>
    </div>

    <div className="flex flex-row gap-2">
      {/* Facebook */}
      <button
        className="w-[90px] h-[90px] outline-none border-none bg-white rounded-[5px_5px_5px_90px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#1877F2] group flex items-center justify-center"
      >
        <FaFacebookF className="mt-[-0.375rem] ml-5 text-[#1877F2] group-hover:text-white text-[30px]" />
      </button>

      {/* YouTube */}
      <button
        className="w-[90px] h-[90px] outline-none border-none bg-white rounded-[5px_5px_90px_5px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#FF0000] group flex items-center justify-center"
      >
        <FaYoutube className="mt-[-0.563rem] -ml-5 text-[#FF0000] group-hover:text-white text-[30px]" />
      </button>
    </div>
  </div>
);

export default SocialButtons;
