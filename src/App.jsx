import Card from "./Components/Card";
import HeroSection from "./Components/HeroSection";
import NavComponent from "./Components/NavComponent";
function App() {
  return (
    <>
      <NavComponent />

      <div className="mt-1 mb-2 flex w-full items-center justify-center">
        <Card />
      </div>

      <HeroSection />
    </>
  );
}

export default App;

//card container original standalone style h-[100vh] w-full
