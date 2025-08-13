import { useState } from "react";
import logo from "/logo.jpeg";
import "./App.css";
import AutoSnapSlider from "./components/AutoSnapSlider";
import ModalSlider from "./components/ModalSlider";
import wasap from "/wasap.svg"
import ImagenSuave from "./components/ImagenSuave";
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
    <div className="bg-gradient-to-tr from-indigo-600  to-purple-500 min-h-screen px-4 py-3">
      <nav
        className="flex w-full px-4 py-2 items-center justify-center 
  bg-white/20 backdrop-blur-md border border-white/20 rounded-full shadow-lg"
      >
        <img className="rounded-full size-12 mr-auto" src={logo} alt="logo" />
        <p className="text-white text-xl font-medium mr-auto font-fm-fascinate">
          Letras en Resina
        </p>
      </nav>
      {/*hero */}
      <section className="py-8">
        <div className="relative ">
          
          <ImagenSuave
            src={logo}
            className="w-full h-full  inset-0 rounded-lg shadow-lg"
            alt=""
          />
          <div className="absolute inset-0  flex  items-end pb-4 gap-2 justify-center">
            <a
              className="flex gap-2 text-center font-fm-fascinate text-white p-3 px-5  bg-gradient-to-tr from-purple-600  to-purple-500 backdrop-blur-md border  rounded-full tracking-widest shadow-md"
              href=""
            >
              <p>Pedir</p> <img className="w-6" src={wasap} alt="" />
            </a>
            <button
              onClick={() => setIsOpen(true)}
              className=" font-fm-fascinate text-white p-3 px-5  bg-gradient-to-l from-purple-600  to-purple-500 backdrop-blur-md border  rounded-full tracking-widest shadow-md"
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

      <div className="flex flex-col gap-8">
        <AutoSnapSlider
          directionSlider={"right"}
          images={images}
        ></AutoSnapSlider>
        <AutoSnapSlider
          directionSlider={"left"}
          images={images}
        ></AutoSnapSlider>
      </div>

            <footer className="w-full text-center pt-15">
              <p className="text-xs text-neutral-400">Sitio web desarrollado por <a className="text-yellow-500 underline" href="https://kevin344k.github.io/portfolio_kevin_webdeveloper/">kevin344k</a></p>

      </footer>
      {isOpen && (
        <ModalSlider
          isOpen={isOpen}
          images={images}
          recibirDato={recibirDato}
        ></ModalSlider>
      )}
    </div>
  );
}

export default App;
