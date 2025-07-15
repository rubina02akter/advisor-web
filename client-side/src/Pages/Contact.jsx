import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import {
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaTwitter,
} from "react-icons/fa";
import Payment from "../components/Payment";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("✅ Message Sent Successfully!");
          form.current.reset();
        },
        () => {
          toast.error("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="py-10 px-4 md:px-16 bg-base-100">
      <div className="grid grid-cols-1 md:pl-4 lg:pl-44  md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">CONTACT US</h2>
          <p className=" items-center p-1">
            <p className="flex items-center gap-2 p-1">
              <FaPhoneAlt /> +8801973430706
            </p>
            <p className="flex items-center gap-2 p-1">
              <FaPhoneAlt /> +8801630608928
            </p>
          </p>
          <p className="flex gap-2">
            <FaMapMarkerAlt />
            <span>
              23/16, BIJLI MAHALLA, BLOCK-F <br />
              MOHAMMADPUR, DHAKA-1207
            </span>
          </p>
          <div className="flex gap-4 text-3xl pl-8">
            <FaFacebook className="text-blue-500 hover:text-blue-600 transition" />
            <FaTwitter className="text-sky-400 hover:text-sky-500 transition" />
            <FaGithub className="hover:text-black transition" />
            <FaInstagram className=" text-red-400  hover:text-pink-600 transition" />
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="form-control  flex flex-col">
            <label className="label text-black">Your Name:</label>
            <input
              type="text"
              name="user_name"
              className="input input-bordered"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-control flex flex-col">
            <label className="label text-black">Your Email: </label>
            <input
              type="email"
              name="user_email"
              className="input input-bordered"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="form-control flex flex-col">
            <label className="label text-black">Your Message: </label>
            <textarea
              name="message"
              rows="5"
              className="textarea textarea-bordered"
              placeholder="Write something..."
              required
            ></textarea>
          </div>

          {/* <button
            type="submit"
            className="btn bg-green-700 hover:bg-green-800 text-white"
          >
            Submit
          </button> */}

          <div className="w-64">
            <button
              type="submit"
              className=" nav-btn text-white bg-gradient-to-br from-[#22C3F2] via-[#22C3F2] to-[#22C3F2]"
            >
              <span className="bubble bubble-1"></span>
              <span className="bubble bubble-2"></span>
              <span className="bubble bubble-3"></span>
              <span className="btn-text">Submit</span>
            </button>
          </div>
        </motion.form>
      </div>
      <div className="mt-8">
        <Payment></Payment>
      </div>
    </div>
  );
};

export default Contact;
