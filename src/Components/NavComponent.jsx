import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
function NavComponent() {
  let [isopen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative z-50 flex items-center justify-between rounded-sm bg-gradient-to-r from-blue-300 to-zinc-500 px-6 py-3 shadow-md md:h-20">
        <div className="flex items-center gap-2">
          <img src="image-logo.svg" alt="logo image" className="h-12 w-12" />
          <h1 className="hidden text-xl font-semibold text-amber-100 sm:block">
            Landwind
          </h1>
        </div>

        <ul className="text-md hidden items-center gap-7 font-normal lg:flex">
          <li className="hover:bg-orange-800 hover:bg-clip-text hover:text-transparent">
            <a href="#">Home</a>
          </li>
          <li className="hover:bg-orange-800 hover:bg-clip-text hover:text-transparent">
            <a href="#">Company</a>
          </li>
          <li className="hover:bg-orange-800 hover:bg-clip-text hover:text-transparent">
            <a href="#">MarketPlace</a>
          </li>
          <li className="hover:bg-orange-800 hover:bg-clip-text hover:text-transparent">
            <a href="#">Features</a>
          </li>
          <li className="hover:bg-orange-800 hover:bg-clip-text hover:text-transparent">
            <a href="#">Team</a>
          </li>
          <li className="hover:bg-orange-800 hover:bg-clip-text hover:text-transparent">
            <a href="#">Contacts</a>
          </li>
        </ul>

        {/* Right-side controls grouped so they stay together at the end */}
        <div className="ml-auto flex items-center gap-3 lg:ml-6">
          <button className="inline-block w-36 rounded-md bg-gradient-to-r from-fuchsia-500 to-violet-600 px-3 py-2 text-blue-200 shadow-xl transition-all duration-700 ease-in-out hover:cursor-pointer">
            Download
          </button>

          {/* Mobile menu icon */}
          <button
            onClick={() => setIsOpen((cur) => !cur)}
            className="block hover:cursor-pointer lg:hidden"
          >
            <HiBars3 />
          </button>
        </div>
        {
          <div
            aria-hidden={!isopen}
            className={`absolute top-full right-0 left-0 z-40 origin-top transform bg-slate-500 text-slate-100 shadow-md backdrop-blur-3xl transition-all duration-300 ease-in-out${isopen ? "pointer-events-auto top-0 translate-y-0 opacity-80" : "pointer-events-none -translate-y-3 opacity-0"}`}
          >
            <ul className="text-md flex flex-col items-start justify-between gap-2 divide-y-2 px-5 py-5 text-center font-semibold sm:font-normal md:gap-4 lg:hidden">
              <li className="hover:bg-orange-800 hover:bg-clip-text hover:text-transparent">
                <a href="#">Home</a>
              </li>
              <li className="hover:bg-orange-800 hover:bg-clip-text hover:text-transparent">
                <a href="">Company</a>
              </li>
              <li className="hover:bg-orange-800 hover:bg-clip-text hover:text-transparent">
                <a href="">MarketPlace</a>
              </li>
              <li className="hover:bg-orange-800 hover:bg-clip-text hover:text-transparent">
                <a href="">Features</a>
              </li>
              <li className="hover:bg-orange-800 hover:bg-clip-text hover:text-transparent">
                <a href="">Team</a>
              </li>
              <li className="hover:bg-orange-800 hover:bg-clip-text hover:text-transparent">
                <a href="">Contacts</a>
              </li>
            </ul>
          </div>
        }
      </div>
    </>
  );
}

export default NavComponent;
