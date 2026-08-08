import { LAYOUT } from "../../constants/bookConstants";
import Container from "../Layout/Container";
import "./StoryPage.css";

const StoryPage = ({ page }) => {
  const { image, heading, text, layout } = page;

  const renderLayout = () => {
    switch (layout) {
      case LAYOUT.IMAGE_LEFT:
        return (
          <div className="story-page__row">
            <div className="story-page__image-wrap">
              <img src={image} alt={heading} className="story-page__image" />
            </div>
            <div className="story-page__text-wrap">
              <h3 className="story-page__heading">{heading}</h3>
              <p className="story-page__text">{text}</p>
            </div>
          </div>
        );

      case LAYOUT.IMAGE_RIGHT:
        return (
          <div className="story-page__row story-page__row--reverse">
            <div className="story-page__text-wrap">
              <h3 className="story-page__heading">{heading}</h3>
              <p className="story-page__text">{text}</p>
            </div>
            <div className="story-page__image-wrap">
              <img src={image} alt={heading} className="story-page__image" />
            </div>
          </div>
        );

      case LAYOUT.FULL_IMAGE:
        return (
          <div className="story-page__full">
            <img src={image} alt={heading} className="story-page__image" />
            {heading && (
              <div className="story-page__caption">
                <h3>{heading}</h3>
              </div>
            )}
          </div>
        );

      case LAYOUT.QUOTE:
        return (
          <div className="story-page__quote">
            <p>&ldquo;{text}&rdquo;</p>
          </div>
        );

      case LAYOUT.CENTER:
        return (
          <div className="story-page__center">
            <h3 className="story-page__heading">{heading}</h3>
            <p className="story-page__text">{text}</p>
          </div>
        );

      // TIMELINE, COMPARISON, GALLERY, INFOGRAPHIC baad me add karenge
      // jab tak specific design nahi ban jata, fallback CENTER use karega
      default:
        return (
          <div className="story-page__center">
            <h3 className="story-page__heading">{heading}</h3>
            <p className="story-page__text">{text}</p>
          </div>
        );
    }
  };

  return (
    <section className="story-page">
      <Container className="story-page__container">
        {renderLayout()}
      </Container>
    </section>
  );
};

export default StoryPage;