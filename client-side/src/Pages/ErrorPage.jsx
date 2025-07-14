import { motion } from "framer-motion";
import { BookOpenIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-4 text-center">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-blue-700"
      >
        <BookOpenIcon className="w-24 h-24 mb-4 mx-auto text-blue-600" />
        <h1 className="text-6xl font-extrabold">404</h1>
        <p className="text-xl mt-2 font-medium">Oops! Page Not Found</p>
        <p className="text-sm text-blue-800 mt-1 max-w-md mx-auto">
          The page you’re looking for doesn't exist or has been moved. But don’t worry, learning never stops!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-6"
      >
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
        >
          Go Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
