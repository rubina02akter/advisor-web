import bg from '../../src/assets/images/medium-shot-man-wearing-vr-glasses.jpg'
export default function Header() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center py-16 text-white h-[550px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      
      </div>
    </div>
  );
}
