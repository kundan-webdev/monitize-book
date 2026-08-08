import { getPageAnimation } from "../../utils/helpers";
import Container from "../Layout/Container";
import PageText from "./PageText";
import { Credits } from "./PageMeta";
import "./BookEnd.css";

const BookEnd = ({ page }) => {
  const animation = getPageAnimation(page.animation);

  return (
    <section
      className="book-end"
      data-anim-type={animation.type}
      data-anim-duration={animation.duration}
      data-anim-delay={animation.delay}
    >
      <Container className="book-end__container">
        <div data-page-content className="book-end__content">
          <PageText heading={page.heading} text={page.text} />
          <Credits credits={page.credits} />
        </div>
      </Container>
    </section>
  );
};

export default BookEnd;
