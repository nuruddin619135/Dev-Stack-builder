import heroBanner from "../../assets/banner-stack.png";
function Banner() {
  return (
    <div className="max-w-7xl mx-auto max-h-150">
      <div className="flex items-center justify-between">
        <div className="flex flex-col w-[50%] gap-10">
          <div>
            <h2 className="text-6xl font-bold">
              Build Your Ideal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE5525] to-[#9631CE]">
                Development Stack
              </span>
            </h2>
          </div>
          <div>
            <p>
              Explore frontend, backend, database, and tooling options, <br />
              compare them side by side, and put together the stack that fits ,
              <br />
              your next project.
            </p>
          </div>
          <div className="flex gap-6">
            <button className="py-2 px-3 bg-gradient-to-r from-[#F97318] to-[#ED4999] rounded font-medium text-white cursor-pointer">
              Explore Technologies
            </button>
            <button className="cursor-pointer border border-black px-3 py-2 rounded ">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-[50%]">
          <img
            src={heroBanner}
            alt="hero banner"
            className="bg-center object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
