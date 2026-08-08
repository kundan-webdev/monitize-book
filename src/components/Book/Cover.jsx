import book from "../../data/book";
import Container from "../Layout/Container";
import "./Cover.css";

const Cover = () => {
  const { title, subtitle, author, brand, coverImage } = book.meta;

  return (
    <section className="cover">
      <div
        className="cover__bg"
        style={coverImage ? { backgroundImage: `url(${coverImage})` } : undefined}
      />
      <div className="cover__overlay" />

      <Container className="cover__content">
        <p className="cover__brand">{brand}</p>
        <h1 className="cover__title">{title}</h1>
        {subtitle && <p className="cover__subtitle">{subtitle}</p>}
        <p className="cover__author">{author}</p>
        <p className="cover__scroll-cue">Scroll to begin</p>
      </Container>
    </section>
  );
};

export default Cover;
