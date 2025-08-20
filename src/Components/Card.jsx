function Card() {
  return (
    <div className="h-85 w-90 overflow-hidden rounded-md shadow-xl">
      <div className="h-[35%] w-[100%] border-b-1">
        <img
          src="./img-1.jpeg"
          alt="image"
          className="h-full w-full object-top sm:object-cover"
        />
        <div class="relative mx-auto -mt-16 h-32 w-32 overflow-hidden rounded-full border-4 border-white">
          <img
            src="./image-2.jpeg"
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="h-[75%] w-full bg-[#ffffff]">
        <div className="relative top-16 flex w-full flex-col items-center justify-center gap-3">
          <div className="text-center">
            <h1 className="font-bold">Anurag Singh</h1>
            <h2>Front-End Designer</h2>
          </div>

          <div className="flex items-center justify-between gap-20 border-b-1 border-slate-300">
            <div className="flex flex-col items-center justify-center">
              <svg
                class="w-4 fill-current text-blue-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
              </svg>
              <span>2k</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <svg
                class="w-4 fill-current text-blue-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"></path>
              </svg>
              <span>People</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <svg
                class="w-4 fill-current text-blue-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"></path>
              </svg>
              <span>10k</span>
            </div>
          </div>
          <button className="transition-color cursor-pointer rounded-full bg-slate-700 px-7 py-2.5 text-center text-sm tracking-wider text-slate-200 duration-300 hover:scale-110 hover:bg-slate-800 hover:tracking-normal">
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
