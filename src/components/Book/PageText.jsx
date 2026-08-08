import { splitParagraphs } from "../../utils/helpers";
import "./PageText.css";

const PageText = ({ heading, text }) => {
  const paragraphs = splitParagraphs(text);

  return (
    <>
      {heading && <h3 className="page-text__heading">{heading}</h3>}
      {paragraphs.length > 0 && (
        <div className="page-text__body">
          {paragraphs.map((para, i) => (
            <p key={i} className="page-text__paragraph">
              {para}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default PageText;
