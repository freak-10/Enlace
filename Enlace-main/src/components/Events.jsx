import Nav from "./Navbar.jsx";
import Eventteaser from "./Eventteaser.jsx";
import Footer from "./Footer.jsx";
import EnlaceNiteBanner from "./EnlaceNiteBanner.jsx";
import enlacelogo from "../assets/Enlace-logo-name.png";

const Events = () => {
  return (
    <div className="h-full w-full bg-gradient-to-b from-[#000000] via-[#04619F] to-[#2D4769] ">
      <div className="h-full w-full bg-competitions-bg">
        <Nav />
        <div className="h-full w-full pt-36">
          <h1 className="font-reemkufi lg:text-4xl text-white text-center">
            Enlace Nite
          </h1>
          <EnlaceNiteBanner />
          <h1 className="font-reemkufi lg:text-4xl text-white text-center">
            Workshops
          </h1>
          <div className="mx-auto h-full w-5/6 flex flex-row flex-wrap justify-around items-center">
            <Eventteaser title="enlace" image={enlacelogo} />
            <Eventteaser />
            <Eventteaser />
            <Eventteaser />
            <Eventteaser />
            <Eventteaser />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Events;
