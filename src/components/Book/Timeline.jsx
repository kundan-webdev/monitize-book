import book from "../../data/book";
import Container from "../Layout/Container";
import { padNumber } from "../../utils/helpers";
import "./Timeline.css";

// Recurring pedagogical sidebars used throughout the book — these read as
// genuine "topics" for an index, unlike narrative/structural tags like
// ANSWER, CLOSING, or NEXT which only make sense in reading order.
const TOPIC_TAGS = [
  "UNDERSTAND DEEPER",
  "INDIA WALL",
  "FOUNDER LENS",
  "INVESTOR LENS",
  "BANKER LENS",
  "SMART QUESTION",
  "REALITY CHECK",
  "RED FLAG",
  "KEY IDEA",
];

const getTopics = (chapter) => {
  const seen = new Set();
  chapter.pages.forEach((page) => {
    if (page.tag && TOPIC_TAGS.includes(page.tag)) seen.add(page.tag);
  });
  return [...seen];
};

const Timeline = () => (
  <section className="timeline" aria-label="Table of contents">
    <Container>
      <p className="timeline__kicker">Contents</p>

      <ol className="timeline__list">
        {book.chapters.map((chapter, index) => {
          const topics = getTopics(chapter);

          return (
            <li key={chapter.id} className="timeline__chapter">
              <a href={`#${chapter.id}`} className="timeline__chapter-link">
                <span className="timeline__chapter-number">{padNumber(index + 1)}</span>
                <span className="timeline__chapter-heading">
                  <span className="timeline__chapter-title">
                    {chapter.intro?.heading || chapter.title}
                  </span>
                  {chapter.intro?.subheading && (
                    <span className="timeline__chapter-subheading">
                      {chapter.intro.subheading}
                    </span>
                  )}
                </span>
              </a>

              {topics.length > 0 && (
                <ul className="timeline__topics">
                  {topics.map((topic) => (
                    <li key={topic}>
                      <a href={`#${chapter.id}`}>{topic}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ol>
    </Container>
  </section>
);

export default Timeline;
