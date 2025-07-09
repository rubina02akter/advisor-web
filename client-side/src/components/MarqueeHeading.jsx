import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
export default function MarqueeHeading() {
  return (
    <div className='flex gap-4 items-center bg-gradient-to-r from-base-200 to-base-300 p-3 border-b border-primary/10'>
      <p className='bg-blue-400 py-1 px-3 text-white font-bold rounded-md shadow-md whitespace-nowrap'>
        LATEST UPDATES
      </p>
      <Marquee 
        pauseOnHover={true} 
        speed={80} 
        gradient={true}
        gradientWidth={50}
        gradientColor={[247, 248, 250]}
        className='space-x-10 font-medium text-[#234079]'
      >
        <Link to='/results' className='hover:text-[#D72050] transition-colors mr-4'>
          🎉 SSC 2024 Results Out Now! Check Top 10 Students from Our Center - Click Here for Details
        </Link>
        <span className='text-primary/40'>|</span>
        <Link to='/admissions' className='hover:text-[#D72050] transition-colors mr-4'>
          🚀 New Batch for HSC 2025 Starting July 15th - Limited Seats Available - Apply Now!
        </Link>
        <span className='text-primary/40'>|</span>
        <Link to='/status' className='hover:text-[#D72050] transition-colors mr-4'>
          📢 SSC 2024 Application Status Now Available Online - Check Your Admission Status
        </Link>
        <span className='text-primary/40'>|</span>
        <Link to='/scholarship' className='hover:text-[#D72050] transition-colors mr-4'>
          💰 Merit Scholarship Application Deadline Extended to July 20th - Apply Now!
        </Link>
        <span className='text-primary/40'>|</span>
        <Link to='/workshop' className='hover:text-[#D72050] transition-colors mr-4'>
          📚 Free Workshop on "Effective Study Techniques" This Saturday - Register Now!
        </Link>
        <span className='text-primary/40'>|</span>
        <Link to='/routine' className='hover:text-[#D72050] transition-colors'>
          🗓️ New Class Routine Published for July-August Session - Download Now
        </Link>
      </Marquee>
    </div>
  );
};
