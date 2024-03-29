import "./App.css";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <div>
        <div className="pointer-events-none absolute inset-0 flex max-md:h-[100%] h-[150%]  items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#0a0a0a]"></div>
        <Landing />
      </div>
    </>
  );
}

export default App;
