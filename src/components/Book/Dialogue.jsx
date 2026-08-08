import "./Dialogue.css";

const Dialogue = ({ dialogue }) => {
  if (!dialogue?.text) return null;

  return (
    <blockquote className="dialogue">
      {dialogue.speaker && (
        <cite className="dialogue__speaker">{dialogue.speaker}</cite>
      )}
      <p className="dialogue__text">&ldquo;{dialogue.text}&rdquo;</p>
    </blockquote>
  );
};

export default Dialogue;
