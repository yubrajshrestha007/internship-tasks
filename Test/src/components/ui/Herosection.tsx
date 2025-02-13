
import hero from "../../assets/hero.jpg"
const HeroSection = () => {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }}>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20">
        <div className="flex flex-col my-90 items-center justify-center h-full">
          <h1 className="text-6xl  font-bold text-white">Yubraj shrestha</h1>
          <p className=" text-3xl text-white mt-5"> Python | AL/ML</p>
          <p className="text-lg text-white mt-4"> Its all About the process of making the thing thats which can be creatded</p>
          <button className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl mt-6 cursor-pointer">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
