import { useState } from 'react';
import { Feedback } from './feedback/feedback';
import { Statistics } from './Statistics/Statistics';
import { Container } from './feedback/container';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const feedback = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const countPositiveFeedback = () => {
    const percentage = (good * 100) / total;
    return Math.round(percentage);
  };

  return (
    <Container>
      <Feedback onGood={feedback} />
      <h2>Statistics</h2>

      {!total ? (
        <h2>There is no feedback</h2>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={countPositiveFeedback()}
        />
      )}
    </Container>
  );
};
