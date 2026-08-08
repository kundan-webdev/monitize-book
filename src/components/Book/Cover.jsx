import book from "../../data/book";
import Container from "../Layout/Container";
import "./Cover.css";

const Cover = ({ onStart }) => {
  const { title, author, coverImage } = book.meta;

  return (
    <section className="cover">
      <div
        className="cover__bg"
        style={{ backgroundImage: `url(${coverImage})` }}
      />
      <div className="cover__overlay" />

      <Container className="cover__content">
        <h1 className="cover__title">{title}</h1>
        <p className="cover__author">{author}</p>

        <button className="cover__cta" onClick={onStart}>
          Start Reading
        </button>
      </Container>
    </section>
  );
};

export default Cover;