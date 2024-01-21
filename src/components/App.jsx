import { Component } from 'react';
import { Feedback } from './feedback/feedback';
import { Statistics } from './Statistics/Statistics';
import { Container } from './feedback/container';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Feedback onGood={this.feedback} />
        <h2>Statistics</h2>
        {total === 0 ? (
          <h2>There is no feedback</h2>
        ) : (
          <Statistics
            state={this.state}
            total={total}
            positive={positivePercentage}
          />
        )}
      </Container>
    );
  }
}
