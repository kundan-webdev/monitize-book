import { padNumber } from "../../utils/helpers";
import Container from "../Layout/Container";
import "./ChapterIntro.css";

const ChapterIntro = ({ chapter, index }) => {
  const { title, intro } = chapter;
  const kicker = intro?.kicker || `Chapter ${padNumber(index + 1)}`;

  return (
    <div className="chapter-intro">
      <Container>
        <p className="chapter-intro__number">
          {kicker}
          {intro?.duration && (
            <span className="chapter-intro__duration"> · {intro.duration}</span>
          )}
        </p>
        <h2 className="chapter-intro__heading">{intro?.heading || title}</h2>
        {intro?.subheading && (
          <p className="chapter-intro__subheading">{intro.subheading}</p>
        )}
      </Container>
    </div>
  );
};

export default ChapterIntro;
