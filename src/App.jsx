import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Articles from "./components/sections/Articles/Articles";
import Hero from "./components/sections/Hero/Hero";
import Overview from "./components/sections/Overview/Overview";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Articles />
      </main>
      <Footer />
    </>
  );
}

export default App;
