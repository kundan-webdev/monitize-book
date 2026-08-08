import { forwardRef } from "react";
import ChapterIntro from "./ChapterIntro";
import "./Chapter.css";

const Chapter = forwardRef(({ chapter, index, children }, ref) => {
  return (
    <section className="chapter" id={chapter.id} ref={ref} data-chapter-id={chapter.id}>
      <ChapterIntro chapter={chapter} index={index} />
      <div className="chapter__body">{children}</div>
    </section>
  );
});

Chapter.displayName = "Chapter";

export default Chapter;
