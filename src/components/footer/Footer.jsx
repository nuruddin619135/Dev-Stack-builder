import FooterInfo from "./FooterInfo";

function Footer() {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="flex ">
        <div className="flex-2 ">
          <FooterInfo />
        </div>
        <div className="flex-1">
          <div>
            <div>
              <div>
                <h3 className="text-lg font-medium">Product</h3>
              </div>
              <div className="flex flex-col gap-1.5">
                <a href="#">Home</a>
                <a href="">Technology</a>
                <a href="">Project</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <div>
              <div>
                <h3 className="text-lg font-medium">Company</h3>
              </div>
              <div className="flex flex-col gap-1.5">
                <a href="#">About</a>
                <a href="">Contact</a>
                <a href="">Careers</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <div>
              <div>
                <h3 className="text-lg font-medium">Legal</h3>
              </div>
              <div className="flex flex-col gap-1.5">
                <a href="#">Privacy Policy</a>
                <a href="">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-4">
        <div>
          <p>© 2026 Dev Stack. All rights reserved.</p>
        </div>
        <div className="flex gap-3">
          <a href="">Privacy</a>
          <a href="">Terms</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
