import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Suspense } from "react";
import Loading from "./components/Loading";

/* const dataPromise = fetch('/contents.json').then((res) => {
  if (!res.ok) {
    throw new Error(`Failed to fetch technologies: ${res.status}`);
  }
  return res.json();
}); */
const dataPromise = async () => {
  const res = await fetch('/contents.json');
  const data = await res.json();
  return data;
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<Loading />}>
        <Main dataPromise={dataPromise()} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
