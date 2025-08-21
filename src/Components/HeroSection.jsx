function HeroSection() {
  //w-[100vh] in case of standalone of this component
  return (
    <div className="flex h-[100vh] w-full flex-col md:flex-row">
      <div className="h-[65%] basis-3/4 overflow-y-scroll bg-white py-10 md:h-fit md:basis-2/3 lg:overflow-y-hidden">
        <div className="flex flex-col items-start gap-3 px-7 py-3 text-start">
          <h2 className="text-3xl font-bold tracking-wider">
            Plant<span className="text-4xl font-bold text-green-500">.</span>
          </h2>
          <h1 className="text-2xl font-bold sm:mt-3 sm:text-6xl sm:tracking-wider">
            Find your{" "}
            <span className="bg-green-500 bg-clip-text text-transparent">
              greeny
            </span>{" "}
            stuff for your room
          </h1>
          <div className="inline-block w-30 border-4 border-green-500"></div>
          <h4 className="py- px-2 font-semibold shadow-lg selection:bg-fuchsia-300 selection:text-fuchsia-900 sm:mt-3 sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, vel?
            Corporis consequuntur voluptatem cumque molestias? Reprehenderit
            necessitatibus repellendus voluptatibus voluptatem natus debitis
            iste quas quaerat quasi cumque, facere veniam autem, maiores
            architecto!
          </h4>
          <button className="rounded-md border-1 bg-green-500 px-1 py-2 text-center tracking-wider text-white transition-all duration-700 ease-in-out hover:scale-110 hover:rotate-360 hover:cursor-pointer hover:bg-green-700 sm:mt-3">
            Learn More
          </button>
        </div>
      </div>
      <div className="h-[35%] basis-1/4 bg-orange-600 md:h-fit md:basis-1/3">
        <img
          src="/image-hero.jpeg"
          alt="image of hero section"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default HeroSection;
