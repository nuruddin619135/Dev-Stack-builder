import Logo from "./Logo";
import Navbar from "./Navbar";
import Actions from "./Actions";

export default function Header() {
  return (
    <div className="sticky top-0 bg-white">
      <header className="max-w-7xl mx-auto flex items-center justify-between py-2 ">
        <div>
          <Logo />
        </div>
        <div>
          <Navbar />
        </div>
        <div>
          <Actions />
        </div>
      </header>
    </div>
  );
}
