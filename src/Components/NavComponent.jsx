function NavComponent() {
  return (
    <div className="flex flex-col gap-1 rounded-sm bg-radial from-white to-zinc-900 to-75% px-10 py-3 shadow-md md:h-20 md:flex-row md:items-center md:justify-between">
      <div className="items-center' flex justify-center gap-2">
        <img src="image-logo.svg" alt="logo image" className="h-15 w-15" />
        <h1 className="place-self-center text-xl font-semibold text-amber-100">
          Landwind
        </h1>
      </div>
      <ul className="text-md sm:font-norma flex flex-col items-center justify-between gap-2 text-center font-semibold sm:flex-row md:gap-4">
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
      <button className="w-36 place-self-center rounded-md bg-linear-to-bl from-fuchsia-500 to-violet-600 px-2 py-3 text-blue-200 shadow-xl transition-all duration-700 ease-in-out hover:cursor-pointer hover:bg-linear-to-r">
        Download
      </button>
    </div>
  );
}

export default NavComponent;
