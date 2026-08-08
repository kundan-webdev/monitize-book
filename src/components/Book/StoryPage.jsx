import { getPageAnimation } from "../../utils/helpers";
import Container from "../Layout/Container";
import PageContent from "./PageContent";
import "./StoryPage.css";

const StoryPage = ({ page, priority = false }) => {
  const animation = getPageAnimation(page.animation);

  return (
    <section
      className="story-page"
      data-anim-type={animation.type}
      data-anim-duration={animation.duration}
      data-anim-delay={animation.delay}
    >
      <Container className="story-page__container">
        <PageContent page={page} priority={priority} />
      </Container>
    </section>
  );
};

export default StoryPage;
