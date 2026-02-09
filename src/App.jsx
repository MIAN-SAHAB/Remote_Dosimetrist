import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Preloader />
      <Header />
      <Home />
      {/* <main className="min-h-screen pt-24 flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          
        </h1>
      </main> */}
      <Footer />
    </>
  );
}
