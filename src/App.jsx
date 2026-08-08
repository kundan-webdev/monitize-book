import { useEffect } from "react";
import { ScrollTrigger } from "./lib/gsap";
import Chapter from "./components/Book/Chapter";
import HorizontalSection from "./components/Book/HorizontalSection";
import StoryPage from "./components/Book/StoryPage";
import book from "./data/book";

function App() {
  useEffect(() => {
    ScrollTrigger.normalizeScroll(true);
  }, []);

  return (
    <Chapter chapter={book.chapters[0]}>
      <HorizontalSection>
        {book.chapters[0].pages.map((page) => (
          <StoryPage key={page.id} page={page} />
        ))}
      </HorizontalSection>
    </Chapter>
  );
}

export default App;