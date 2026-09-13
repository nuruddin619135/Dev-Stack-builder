export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-5 font-medium text-[#475569]">
        <li>
          <a
            className="hover:text-[#d91b7e] active:text-[#d91b7e] transition-all ease-in-out duration-300"
            href="#"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#d91b7e] active:text-[#d91b7e] transition-all ease-in-out duration-300"
            href="#"
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#d91b7e] active:text-[#d91b7e] transition-all ease-in-out duration-300"
            href="#"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#d91b7e] active:text-[#d91b7e] transition-all ease-in-out duration-300"
            href="#"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#d91b7e] active:text-[#d91b7e] transition-all ease-in-out duration-300"
            href="#"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
