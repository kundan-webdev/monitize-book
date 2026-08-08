import Container from "../Layout/Container";
import "./Chapter.css";

const Chapter = ({ chapter, children }) => {
  const { title, intro } = chapter;

  return (
    <section className="chapter">
      <div className="chapter__intro">
        <Container>
          <h2 className="chapter__heading">{intro?.heading || title}</h2>
          {intro?.subheading && (
            <p className="chapter__subheading">{intro.subheading}</p>
          )}
        </Container>
      </div>

      {/* HorizontalSection with StoryPages goes here */}
      <div className="chapter__body">{children}</div>
    </section>
  );
};

export default Chapter;