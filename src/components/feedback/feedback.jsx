export const Feedback = ({ onGood }) => {
  return (
    <div>
      <h1>Please leave feedback</h1>

      <button type="button" name="good" onClick={onGood}>
        Good
      </button>
      <button type="button" name="neutral" onClick={onGood}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={onGood}>
        Bad
      </button>
    </div>
  );
};
