import { LAYOUT } from "../../constants/bookConstants";
import { getPageLayout } from "../../utils/helpers";
import PageImage from "./PageImage";
import PageText from "./PageText";
import Dialogue from "./Dialogue";
import DataBlock from "./DataBlock";
import Challenge from "./Challenge";
import {
  Tag,
  FloorOrBucket,
  BucketsOverview,
  Calculation,
  ChecklistMark,
  NextBookCard,
} from "./PageMeta";
import "./PageContent.css";

const Kicker = ({ page }) => (
  <>
    {page.checklist && <ChecklistMark />}
    <Tag tag={page.tag} />
    <FloorOrBucket entry={page.floor || page.bucket} />
  </>
);

const Extras = ({ page }) => (
  <>
    <Dialogue dialogue={page.dialogue} />
    <BucketsOverview buckets={page.buckets} />
    <DataBlock data={page.data} />
    <Calculation calculation={page.calculation} />
    <Challenge challenge={page.challenge} />
    <NextBookCard nextBook={page.nextBook} />
  </>
);

// FULL_IMAGE pages that also carry dense structured content (tables,
// waterfalls, multi-item challenges) drop the full-bleed image in favour of
// a readable content column — an image + a 7-row table stacked as text-over-
// photo is illegible, and the book's own data already makes the point.
const isDataHeavy = (page) =>
  Boolean(
    page.data || page.challenge || page.buckets || page.calculation || page.nextBook
  );

const PageContent = ({ page, priority }) => {
  const layout = getPageLayout(page.layout);
  const { image, heading, text } = page;

  switch (layout) {
    case LAYOUT.IMAGE_LEFT:
    case LAYOUT.IMAGE_RIGHT:
      return (
        <div
          className={`page-content page-content__row ${
            layout === LAYOUT.IMAGE_RIGHT ? "page-content__row--reverse" : ""
          }`}
        >
          <div className="page-content__image-wrap" data-anim-image>
            <PageImage src={image} alt={heading} priority={priority} />
          </div>
          <div className="page-content__text-wrap" data-anim-text>
            <Kicker page={page} />
            <PageText heading={heading} text={text} />
            <Extras page={page} />
          </div>
        </div>
      );

    case LAYOUT.FULL_IMAGE:
      if (isDataHeavy(page)) {
        return (
          <div className="page-content page-content__center" data-anim-text>
            <Kicker page={page} />
            <PageText heading={heading} text={text} />
            <Extras page={page} />
          </div>
        );
      }
      return (
        <div className="page-content page-content__full">
          <PageImage
            src={image}
            alt={heading}
            priority={priority}
            className="page-content__full-image"
            data-anim-image
          />
          {(heading || text || page.tag) && (
            <div className="page-content__caption" data-anim-text>
              <Kicker page={page} />
              <PageText heading={heading} text={text} />
              <Dialogue dialogue={page.dialogue} />
            </div>
          )}
        </div>
      );

    case LAYOUT.QUOTE:
      return (
        <div className="page-content page-content__quote" data-anim-text>
          <Kicker page={page} />
          {heading && <p className="page-content__quote-kicker-heading">{heading}</p>}
          <p className="page-content__quote-text">&ldquo;{text}&rdquo;</p>
          <Extras page={page} />
        </div>
      );

    case LAYOUT.CENTER:
    default:
      return (
        <div className="page-content page-content__center" data-anim-text>
          <Kicker page={page} />
          <PageText heading={heading} text={text} />
          <Extras page={page} />
        </div>
      );
  }
};

export default PageContent;
