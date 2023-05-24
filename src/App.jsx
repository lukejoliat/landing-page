import { IconContext } from "react-icons";
import { GiReceiveMoney, GiScales } from "react-icons/gi";
import { IoMdArrowForward, IoMdTrophy } from "react-icons/io";
import {
  MdBusinessCenter,
  MdGavel,
  MdHandshake,
  MdOutlineFamilyRestroom,
} from "react-icons/md";
import { SlBriefcase } from "react-icons/sl";
import "./App.css";
import logo from "./assets/logo.png";
import woman from "./assets/woman.png";

export default function App() {
  return (
    <div className="bg-[#fefefe] text-slate-700">
      <header className="flex max-w-6xl m-auto p-3">
        <img src={logo} alt="" />
        <nav className="flex flex-1 justify-center items-center text-sky-950">
          <a className="mx-2 text-orange-400">Home</a>
          <a className="mx-2">Practice</a>
          <a className="mx-2">Why Choose Us</a>
          <a className="mx-2">Lawyers</a>
          <a className="mx-2">Reviews</a>
        </nav>
        <div className="flex">
          <button className="p-2 rounded-2xl border-solid border-2 border-orange-400 text-orange-400 mx-2">
            +1-202-555-0109
          </button>
          <button className="bg-orange-400 p-2 rounded-2xl text-white font-bold">
            Contact Us
          </button>
        </div>
      </header>
      <main>
        <section className="max-w-5xl m-auto grid grid-cols-1 gap-2 md:grid-cols-2 mt-12">
          <div className="flex flex-col self-center">
            <div className="p-5">
              <h1 className="font-bold text-5xl font-serif text-sky-950">
                We Are Experts In The Legal Profession
              </h1>
              <p className="mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, accusamus! Recusandae corrupti non ut
                perspiciatis accusamus dignissimos.
              </p>
              <button className="bg-orange-400 p-4 rounded-full text-white mt-4 font-bold">
                Contact Us
              </button>
            </div>
          </div>
          <div>
            <div className="relative max-w-[500px] m-auto">
              <div className="m-auto relative overflow-hidden max-h-[500px] max-w-[500px] md:max-h-[300px] md:max-w-[300px] lg:max-w-[500px] lg:max-h-[500px] bg-orange-400 bg-slate rounded-[100%]">
                <img
                  className="m-auto z-10 relative"
                  src={woman}
                  alt="woman image"
                />
              </div>
              <div className="absolute h-14 w-14 bg-white shadow-md rounded-full justify-center flex items-center bottom-40 left-[-2rem]">
                <IconContext.Provider
                  value={{
                    scale: 30,
                    style: {
                      fill: "rgb(251 146 60)",
                      scale: 3,
                    },
                  }}
                >
                  <MdGavel size={30} />
                </IconContext.Provider>
              </div>
              <div className="absolute h-14 w-14 bg-white shadow-md rounded-full justify-center flex items-center top-20 right-0">
                <IconContext.Provider
                  value={{
                    scale: 30,
                    style: {
                      fill: "rgb(251 146 60)",
                      scale: 3,
                    },
                  }}
                >
                  <GiScales size={30} />
                </IconContext.Provider>
              </div>
              <div className="shadow-md rounded-md max-w-full w-50 p-2 absolute bottom-[-3rem] right-[-5rem] bg-white z-20">
                <div className="p-2 rounded-lg bg-blue-400 text-white mb-2 flex">
                  <div className="bg-white/50 opacity-50 rounded-md mr-2 flex items-center">
                    <IoMdTrophy size={50} />
                  </div>
                  <div>
                    <span className="font-serif font-bold">3472</span>
                    <br />
                    <span>Total Cases Won</span>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-amber-300 text-white mb-2 flex">
                  <div className="bg-white/50 opacity-50 rounded-md mr-2 flex items-center">
                    <MdBusinessCenter size={50} />
                  </div>
                  <div>
                    <span className="font-serif font-bold">230</span>
                    <br /> <span>Expert Lawyers</span>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-indigo-600 text-white flex">
                  <div className="bg-white/50 opacity-50 rounded-md mr-2 flex items-center">
                    <MdHandshake size={50} />
                  </div>
                  <div>
                    <span className="font-serif font-bold">130</span>
                    <br /> <span>Business Partners</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl m-auto bg-gray-200 mt-40 text-center p-8 pb-12">
          <h3 className="text-orange-400 font-serif">SERVICES</h3>
          <h1 className="text-5xl font-serif text-sky-950">
            Our Practice Areas
          </h1>
          <div className="grid grid-cols-3 gap-6 mt-10 max-w-5xl m-auto">
            <div className="practice-area p-4 text-left bg-white">
              <SlBriefcase size={50} fill="rgb(251 146 60)" />
              <h2 className="text-sky-950 text-2xl font-serif font-bold mt-3">
                Business Law
              </h2>
              <p className="mt-2 leading-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus tempora cupiditate obcaecati iusto sint ex nesciunt
                facilis.
              </p>
              <button className="mt-2 text-orange-400 flex items-center">
                <span className="mr-2">Learn More </span>
                <IoMdArrowForward />
              </button>
            </div>
            <div className="practice-area p-4 text-left bg-white">
              <MdOutlineFamilyRestroom size={50} fill="rgb(251 146 60)" />
              <h2 className="text-sky-950 text-2xl font-serif font-bold mt-3">
                Family Law
              </h2>
              <p className="mt-2  leading-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus tempora cupiditate obcaecati iusto sint ex nesciunt
                facilis.
              </p>
              <button className="mt-2 text-orange-400 flex items-center">
                <span className="mr-2">Learn More </span>
                <IoMdArrowForward />
              </button>
            </div>
            <div className="practice-area p-4 text-left bg-white">
              <GiReceiveMoney size={50} fill="rgb(251 146 60)" />
              <h2 className="text-sky-950 text-2xl font-serif font-bold mt-3">
                Business Law
              </h2>
              <p className="mt-2  leading-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus tempora cupiditate obcaecati iusto sint ex nesciunt
                facilis.
              </p>
              <button className="mt-2 text-orange-400 flex items-center">
                <span className="mr-2">Learn More </span>
                <IoMdArrowForward />
              </button>
            </div>
            <div className="practice-area p-4 text-left bg-white">
              <h2 className="text-sky-950 text-2xl font-serif font-bold mt-3">
                Business Law
              </h2>
              <p className="mt-2  leading-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus tempora cupiditate obcaecati iusto sint ex nesciunt
                facilis.
              </p>
              <button className="mt-2 text-orange-400 flex items-center">
                <span className="mr-2">Learn More </span>
                <IoMdArrowForward />
              </button>
            </div>
            <div className="practice-area p-4 text-left bg-white">
              <h2 className="text-sky-950 text-2xl font-serif font-bold mt-3">
                Business Law
              </h2>
              <p className="mt-2  leading-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus tempora cupiditate obcaecati iusto sint ex nesciunt
                facilis.
              </p>
              <button className="mt-2 text-orange-400 flex items-center">
                <span className="mr-2">Learn More </span>
                <IoMdArrowForward />
              </button>
            </div>
            <div className="practice-area p-4 text-left bg-white">
              <h2 className="text-sky-950 text-2xl font-serif font-bold mt-3">
                Business Law
              </h2>
              <p className="mt-2  leading-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus tempora cupiditate obcaecati iusto sint ex nesciunt
                facilis.
              </p>
              <button className="mt-2 text-orange-400 flex items-center">
                <span className="mr-2">Learn More </span>
                <IoMdArrowForward />
              </button>
            </div>
          </div>
        </section>
        <section className="max-w-5xl m-auto grid grid-cols-1 gap-2 md:grid-cols-2 mt-12">
          <h1>Why Choose Us?</h1>
        </section>
        <footer className="max-w-5xl m-auto mt-12 mb-12 flex justify-between">
          <div className="w-full max-w-xs">
            <img src={logo} />
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              soluta ullam laborum. Earum, at distinctio possimus dolore sit
              accusamus in aut.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-sky-950">
              Practice Areas
            </h2>
            <ul>
              <li>Business Law</li>
              <li>Family Law</li>
              <li>Finance Law</li>
              <li>Criminal Law</li>
              <li>Real Estate Law</li>
              <li>Divorce Law</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-sky-950">
              Company
            </h2>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Career</li>
              <li>How to Hire Us</li>
              <li>Law Certification</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-sky-950">
              Address
            </h2>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Career</li>
              <li>How to Hire Us</li>
              <li>Law Certification</li>
            </ul>
          </div>
        </footer>
      </main>
    </div>
  );
}
