import logo from "./../../assets/logo-text.png";
function FooterInfo() {
  return (
    <div className="flex gap-3 flex-col">
      <div>
        <img src={logo} alt="company logo" />
      </div>
      <div>
        <p>
          Curated tools, technologies, and resources for developers building
          modern software.
        </p>
      </div>
      <div className="flex gap-1.5">
        <a href="" className="font-medium">
          Github
        </a>
        <a href="" className="font-medium">
          Twitter
        </a>
        <a href="" className="font-medium">
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default FooterInfo;
