import { List } from '../feedback/container';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <List>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positive} %</li>
      </List>
    </>
  );
};
