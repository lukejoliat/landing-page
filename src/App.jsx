import { GiHandcuffs, GiHouse, GiReceiveMoney, GiScales } from "react-icons/gi";
import { IoMdArrowForward, IoMdTrophy } from "react-icons/io";
import {
  MdBusinessCenter,
  MdGavel,
  MdHandshake,
  MdOutlineFamilyRestroom,
  MdPeople,
  MdPhone,
} from "react-icons/md";
import { SlBriefcase } from "react-icons/sl";
import "./App.css";
import logo from "./assets/logo.png";
import woman from "./assets/woman.png";

export default function App() {
  return (
    <div className="bg-[#fefefe] text-slate-700">
      <header className="block md:flex max-w-6xl m-auto p-3">
        <img src={logo} alt="" />
        <nav className="hidden lg:flex flex-1 justify-center items-center text-sky-950">
          <a className="mx-2 text-orange-400">Home</a>
          <a className="mx-2">Practice</a>
          <a className="mx-2">Why Choose Us</a>
          <a className="mx-2">Lawyers</a>
          <a className="mx-2">Reviews</a>
        </nav>
        <div className="flex items-center">
          <button className="flex p-2 rounded-full border-solid border-2 border-orange-400 text-orange-400 mx-2">
            +1-202-555-0109
          </button>
          <button className="bg-orange-400 p-2 rounded-full text-white font-bold flex items-center">
            <span className="inline-block mr-2">Contact Us</span>
            <span className="inline-block bg-white/30 rounded-full p-2"><MdPhone /></span>
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
              <div className="hidden lg:flex absolute h-14 w-14 bg-white shadow-md rounded-full justify-center items-center bottom-40 left-[-2rem]">
                <MdGavel size={30} fill="rgb(251 146 60)" />
              </div>
              <div className="hidden lg:flex absolute h-14 w-14 bg-white shadow-md rounded-full justify-center items-center top-20 right-0">
                <GiScales size={30} fill="rgb(251 146 60)" />
              </div>
              <div className="hidden lg:block shadow-md rounded-md max-w-full w-50 p-2 absolute bottom-[-3rem] right-[-5rem] bg-white z-20">
                <div className="p-2 rounded-lg bg-blue-400 text-white mb-2 flex">
                  <div className="bg-white/30 rounded-md mr-2 flex items-center">
                    <IoMdTrophy size={50} />
                  </div>
                  <div>
                    <span className="font-serif font-bold">3472</span>
                    <br />
                    <span>Total Cases Won</span>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-amber-300 text-white mb-2 flex">
                  <div className="bg-white/30 rounded-md mr-2 flex items-center">
                    <MdBusinessCenter size={50} />
                  </div>
                  <div>
                    <span className="font-serif font-bold">230</span>
                    <br /> <span>Expert Lawyers</span>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-indigo-600 text-white flex">
                  <div className="bg-white/30 rounded-md mr-2 flex items-center">
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
        <section className="bg-gray-200 my-40 text-center p-8 py-20">
          <h3 className="text-orange-400 font-serif">SERVICES</h3>
          <h1 className="text-5xl font-serif text-sky-950">
            Our Practice Areas
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl m-auto">
            <div className="practice-area p-8 text-left bg-white">
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
            <div className="practice-area p-8 text-left bg-white">
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
            <div className="practice-area p-8 text-left bg-white">
              <GiReceiveMoney size={50} fill="rgb(251 146 60)" />
              <h2 className="text-sky-950 text-2xl font-serif font-bold mt-3">
                Financial Law
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
            <div className="practice-area p-8 text-left bg-white">
              <GiHandcuffs size={50} fill="rgb(251 146 60)" />
              <h2 className="text-sky-950 text-2xl font-serif font-bold mt-3">
                Criminal Law
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
            <div className="practice-area p-8 text-left bg-white">
              <GiHouse size={50} fill="rgb(251 146 60)" />
              <h2 className="text-sky-950 text-2xl font-serif font-bold mt-3">
                Real Estate Law
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
            <div className="practice-area p-8 text-left bg-white">
              <MdPeople size={50} fill="rgb(251 146 60)" />

              <h2 className="text-sky-950 text-2xl font-serif font-bold mt-3">
                Divorce Law
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
        {/* <section className="max-w-5xl m-auto grid grid-cols-1 gap-2 md:grid-cols-2 mt-12">
          <h1>Why Choose Us?</h1>
        </section> */}
        <footer className="mt-12 mb-12">
          <div className="max-w-5xl m-auto block text-center md:text-left md:flex justify-between">
            <div className="w-full max-w-xs">
              <img src={logo} />
              <p className="mt-2 leading-relaxed tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                soluta ullam laborum. Earum, at distinctio possimus dolore sit
                accusamus in aut.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-sky-950 my-3">
                Practice Areas
              </h2>
              <ul>
                <li className="my-2">Business Law</li>
                <li className="my-2">Family Law</li>
                <li className="my-2">Finance Law</li>
                <li className="my-2">Criminal Law</li>
                <li className="my-2">Real Estate Law</li>
                <li className="my-2">Divorce Law</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-sky-950 my-3">
                Company
              </h2>
              <ul>
                <li className="my-2">About Us</li>
                <li className="my-2">Contact Us</li>
                <li className="my-2">Career</li>
                <li className="my-2">How to Hire Us</li>
                <li className="my-2">Law Certification</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-sky-950 my-3">
                Address
              </h2>
              <ul>
                <li className="my-2">About Us</li>
                <li className="my-2">Contact Us</li>
                <li className="my-2">Career</li>
                <li className="my-2">How to Hire Us</li>
                <li className="my-2">Law Certification</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl h-[2px] w-full bg-slate-200 m-auto mt-12 mb-12"></div>
          <div className="text-center">© 2021 Instant Law. All rights reserved.</div>
        </footer>
      </main>
    </div>
  );
}
