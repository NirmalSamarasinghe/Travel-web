import LandingPage from "~/assets/lp.jpeg";

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat">
      <img
        src={LandingPage}
        alt="Background Image"
        className="w-full h-full object-cover"
      />
      <div>
        <h1 className="text-4xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-8">
          Up To 40% Off
        </h1>
        <p className="text-lg text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4">
            Adventure Travel
        </p>
      </div>
    </div>
  );
};

export default Welcome;