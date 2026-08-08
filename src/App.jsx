import { useEffect } from "react";
import { ScrollTrigger } from "./lib/gsap";
import Book from "./components/Book/Book";

function App() {
  useEffect(() => {
    // Fixes the Windows Chrome wheel-scroll "snap/reset" bug by normalizing
    // native wheel/touch deltas before they reach ScrollTrigger.
    ScrollTrigger.normalizeScroll(true);
  }, []);

  return <Book />;
}

export default App;
