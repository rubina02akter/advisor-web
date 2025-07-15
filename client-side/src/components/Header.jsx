import bg from "../../src/assets/images/medium-shot-man-wearing-vr-glasses.jpg";
export default function Header() {
  return (
    <div className="pt-4 ">
      <div
        className="relative rounded-2xl bg-cover bg-center py-16 text-white h-[550px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute rounded-2xl inset-0 bg-black opacity-50"></div>
      </div>
      <div></div>
    </div>
  );
}
