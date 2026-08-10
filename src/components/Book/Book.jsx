import { useEffect, useRef, useState } from "react";
import book from "../../data/book";
import Cover from "./Cover";
import Timeline from "./Timeline";
import Chapter from "./Chapter";
import HorizontalSection from "./HorizontalSection";
import StoryPage from "./StoryPage";
import BookEnd from "./BookEnd";
import ProgressBar from "../Common/ProgressBar";
import PageNumber from "../Common/PageNumber";
import TopBar from "../Common/TopBar";
import useImagePreloader from "../../hooks/useImagePreloader";
import "./Book.css";

const Book = () => {
  const chapterRefs = useRef([]);
  const [activeChapter, setActiveChapter] = useState(0);

  useImagePreloader(book, activeChapter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = chapterRefs.current.indexOf(entry.target);
          if (index !== -1) setActiveChapter(index);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    chapterRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="book">
      <TopBar activeChapter={activeChapter} />
      <Cover />
      <Timeline />

      {book.chapters.map((chapter, index) => (
        <Chapter
          key={chapter.id}
          chapter={chapter}
          index={index}
          ref={(el) => {
            chapterRefs.current[index] = el;
          }}
        >
          <HorizontalSection>
            {chapter.pages.map((page, pageIndex) =>
              page.isEnd ? (
                <BookEnd key={page.id} page={page} />
              ) : (
                <StoryPage
                  key={page.id}
                  page={page}
                  priority={index === 0 && pageIndex === 0}
                />
              )
            )}
          </HorizontalSection>
        </Chapter>
      ))}

      <ProgressBar />
      <PageNumber current={activeChapter + 1} total={book.chapters.length} />
    </div>
  );
};

export default Book;
