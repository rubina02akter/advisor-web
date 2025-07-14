import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
export default function MarqueeHeading() {
  return (
    <div className="flex gap-4 items-center bg-gradient-to-r from-base-200 to-base-300 p-3 border-b border-primary/10">
      <p className="bg-blue-400 py-1 px-2 text-xs sm:px-3 sm:text-sm text-white font-bold rounded-md shadow-md whitespace-nowrap">
        LATEST UPDATES
      </p>

      <Marquee
        pauseOnHover={true}
        speed={80}
        gradient={true}
        gradientWidth={50}
        gradientColor={[247, 248, 250]}
        className="space-x-10 font-medium text-[#234079]"
      >
        <Link
          to="/results"
          className="hover:text-[#D72050] transition-colors mr-4"
        >
          🎉 অফিস ম্যানেজমেন্ট কোর্স –ব্যাচ ০৫ এর অরিয়েন্টেশন ক্লাস অনুষ্ঠিত হতে
          যাচ্ছে আগামী ৯ জুলাই।
        </Link>
        <span className="text-primary/40">|</span>
        <Link
          to="/admissions"
          className="hover:text-[#D72050] transition-colors mr-4"
        >
          🚀 সীমিত আসনে ব্যাচ ০৬-এ ভর্তি চলছে।
        </Link>
        <span className="text-primary/40">|</span>
        <Link
          to="/status"
          className="hover:text-[#D72050] transition-colors mr-4"
        >
          📢 অফিস ম্যানেজমেন্ট কোর্সের সঙ্গে ফ্রি কম্পিউটার ফান্ডামেন্টাল
          প্রশিক্ষণ।
        </Link>
        <span className="text-primary/40">|</span>
        <Link
          to="/scholarship"
          className="hover:text-[#D72050] transition-colors mr-4"
        >
          💰 ফ্রিল্যান্সিং কোর্সের ২য় ব্যাচে ভর্তি চলছে....
        </Link>
        <span className="text-primary/40">|</span>
        <Link
          to="/workshop"
          className="hover:text-[#D72050] transition-colors mr-4"
        >
          📚 কোর্স সমূহ : গ্রাফিক ডিজাইন - ডিজিটাল মার্কেটিং।
        </Link>
        <span className="text-primary/40">|</span>
        <Link to="/routine" className="hover:text-[#D72050] transition-colors">
          🗓️ শিক্ষার সর্বোচ্চ মান নিশ্চিত করে প্রপার গাইডলাইনের মাধ্যমে দূর্বল ও
          যেকোনো শিক্ষার্থীকে সেরাদের সেরা হিসেবেই গড়ে তুলতেই আমাদের এই প্রয়াস।
        </Link>
      </Marquee>
    </div>
  );
}
