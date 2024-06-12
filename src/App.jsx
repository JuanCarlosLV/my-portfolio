import FollowCursor from "./Components/FollowCursor";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <FollowCursor />

      <header className="fixed top-0 flex justify-center items-center mt-4 w-full  z-10">
        <Navbar />
      </header>

      <main className="px-5">
        <section></section>
      </main>
    </>
  );
}

export default App;
