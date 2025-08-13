import { useState } from "react";
import logo from "/logo.jpeg";
import "./App.css";
import AutoSnapSlider from "./components/AutoSnapSlider";
import ModalSlider from "./components/ModalSlider";
import wasap from "/wasap.svg";
import ImagenSuave from "./components/ImagenSuave";
import Typewriter from "./components/Typewriter";
import AutoSnapSliderDesktop from "./components/AutoSliderdesktop";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const baseURL = import.meta.env.BASE_URL;

  const images = [
    `${baseURL}imagenes-resina/img1-min.jpeg`,
    `${baseURL}imagenes-resina/img2-min.jpeg`,
    `${baseURL}imagenes-resina/img3-min.jpeg`,
    `${baseURL}imagenes-resina/img4-min.jpeg`,
    `${baseURL}imagenes-resina/img5-min.jpeg`,
    `${baseURL}imagenes-resina/img6-min.jpeg`,
    `${baseURL}imagenes-resina/img7-min.jpeg`,
    `${baseURL}imagenes-resina/img8-min.jpeg`,
    `${baseURL}imagenes-resina/img9-min.jpeg`,
    `${baseURL}imagenes-resina/img10-min.jpeg`,
    `${baseURL}imagenes-resina/img11-min.jpeg`,
    `${baseURL}imagenes-resina/img12-min.jpeg`,
    `${baseURL}imagenes-resina/img13-min.jpeg`,
    `${baseURL}imagenes-resina/img14-min.jpeg`,
    `${baseURL}imagenes-resina/img15-min.jpeg`,
    `${baseURL}imagenes-resina/img16-min.jpeg`,
    `${baseURL}imagenes-resina/img17-min.jpeg`,
    `${baseURL}imagenes-resina/img18-min.jpeg`,
    `${baseURL}imagenes-resina/img19-min.jpeg`,
    `${baseURL}imagenes-resina/img20-min.jpeg`,
    `${baseURL}imagenes-resina/img21-min.jpeg`,
    `${baseURL}imagenes-resina/img22-min.jpeg`,
    `${baseURL}imagenes-resina/img23-min.jpeg`,
    `${baseURL}imagenes-resina/img24-min.jpeg`,
    `${baseURL}imagenes-resina/img25-min.jpeg`,
    `${baseURL}imagenes-resina/img26-min.jpeg`,
    `${baseURL}imagenes-resina/img27-min.jpeg`,
    `${baseURL}imagenes-resina/img28-min.jpeg`,
    `${baseURL}imagenes-resina/img29-min.jpeg`,
    `${baseURL}imagenes-resina/img30-min.jpeg`,
    `${baseURL}imagenes-resina/img31-min.jpeg`,
    `${baseURL}imagenes-resina/img32-min.jpeg`,
    `${baseURL}imagenes-resina/img33-min.jpeg`,
    `${baseURL}imagenes-resina/img34-min.jpeg`,
    `${baseURL}imagenes-resina/img35-min.jpeg`,
  ];
  const recibirDato = (valor) => {
    setIsOpen(false);
  };

  return (
    <div className="relative bg-gradient-to-tr from-indigo-600  to-purple-500 min-h-screen flex justify-between flex-col">
              <nav
          className="flex w-full gap-4 px-4 py-2 items-center justify-center 
  bg-white/20 backdrop-blur-md border border-white/20 rounded-full shadow-md animate-fadeInFromTop md:max-w-[600px] md:mx-auto lg:max-w-[1000px] mt-4"
        >
          <img className="rounded-full size-12 " src={logo} alt="logo" />

          <Typewriter text="Letras en Resina" speed={80} />
        </nav>
      <div className=" px-4 py-3">

        {/*hero */}
  <div className="flex flex-col lg:justify-center lg:items-center lg:flex-row lg:gap-20">
          <section className="py-4 animate-fadeIn md:max-w-[400px] md:mx-auto lg:m-0">
          <div className="relative aspect-square  ">
            <ImagenSuave
              src={logo}
              className="w-full h-full  inset-0 rounded-lg shadow-lg"
              alt=""
            />
            <div className="absolute inset-0  flex  items-end pb-4 gap-2 justify-center">
              <a
                className="flex gap-2 text-center font-fm-fascinate text-white p-3 px-3  bg-gradient-to-tr from-purple-600  to-purple-500 backdrop-blur-md border  rounded-full tracking-widest shadow-md"
                href=""
              >
                <p>Pedir</p> <img className="w-6 shake" src={wasap} alt="" />
              </a>
              <button
                onClick={() => setIsOpen(true)}
                className=" font-fm-fascinate text-white p-3 px-3  bg-gradient-to-l from-purple-600  to-purple-500 backdrop-blur-md border  rounded-full tracking-widest shadow-md"
              >
                Ver diseños
              </button>
            </div>
          </div>
          <div
            className="w-full px-4 py-2 mt-4 items-center justify-center 
  bg-white/20 backdrop-blur-md border border-white/20  shadow-lg"
          >
            <p className="text-white font-bold">
              Personaliza tu inicial con colores, brillos y detalles únicos. Un
              regalo perfecto y diferente.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-8 animate-fadeIn lg:hidden">
          <AutoSnapSlider
            directionSlider={"right"}
            images={images}
          ></AutoSnapSlider>
          <AutoSnapSlider
            directionSlider={"left"}
            images={images}
          ></AutoSnapSlider>
        </div>


   <div className="hidden lg:flex  gap-8 animate-fadeIn ">
          <AutoSnapSliderDesktop
            directionSlider={"down"}
            images={images}
          />
          <AutoSnapSliderDesktop
            directionSlider={"top"}
            images={images}
          />
        </div>




  </div>

        {isOpen && (
          <ModalSlider
            isOpen={isOpen}
            images={images}
            recibirDato={recibirDato}
          ></ModalSlider>
        )}
      </div>
          <footer className=" bottom-0 w-full text-center mt-full animate-fadeIn">
        <p className="text-xs text-neutral-400 pb-3">
          Sitio web desarrollado por{" "}
          <a
            className="text-yellow-500 underline"
            href="https://kevin344k.github.io/portfolio_kevin_webdeveloper/"
          >
            kevin344k
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
