import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-10 bg-white mt-8 mb-8">
      <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <img
          src="/assets/hero.webp"
          alt="Jewelry Hero"
          className="w-80 md:w-[32rem] object-contain"
        />
      </div>

      <div className="md:w-1/2 flex flex-col gap-6 text-center md:text-left">
        <div>
          <p className="text-m text-gray-500 tracking-widest uppercase mb-2">
            Featured Pieces
          </p>
          <h1 className="text-2xl mb-7 md:text-4xl font-bold text-yellow-800 leading-tight">
            Elevate Your Style <br /> with Timeless Jewelry
          </h1>
          <p className="text-gray-700 text-base md:text-lg">
            Explore our handpicked collection of elegance and craftsmanship.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
