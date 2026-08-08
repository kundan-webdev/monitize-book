import { useId, useState } from "react";
import "./Challenge.css";

const Challenge = ({ challenge }) => {
  const [selected, setSelected] = useState(null);
  const groupId = useId();

  if (!challenge?.options?.length) return null;

  const isAnswered = selected !== null;
  const isCorrect = selected === challenge.correctAnswer;

  return (
    <div className="challenge" role="radiogroup" aria-labelledby={groupId}>
      <p id={groupId} className="challenge__prompt">
        Choose your answer
      </p>

      <div className="challenge__options">
        {challenge.options.map((option) => {
          const isSelected = selected === option.id;
          const revealCorrect =
            isAnswered && option.id === challenge.correctAnswer;
          const revealWrong = isAnswered && isSelected && !isCorrect;

          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={isAnswered}
              onClick={() => setSelected(option.id)}
              className={[
                "challenge__option",
                revealCorrect && "challenge__option--correct",
                revealWrong && "challenge__option--wrong",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span className="challenge__option-id">{option.id}</span>
              <span className="challenge__option-text">{option.text}</span>
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <p
          className="challenge__feedback"
          role="status"
          aria-live="polite"
        >
          {isCorrect
            ? "Correct."
            : `Not quite. The correct answer is ${challenge.correctAnswer}.`}
        </p>
      )}
    </div>
  );
};

export default Challenge;
