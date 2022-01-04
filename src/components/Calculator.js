import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='container-cal'>
        <div className='cal-screen'>
          0
        </div>
        <div className='buttons'>
        <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button className="orange-btn" type="button">&divide;</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button className="orange-btn" type="button">&times;</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button className="orange-btn" type="button">&minus;</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button className="orange-btn" type="button">+</button>
          <button className="double-space" type="button">0</button>
          <button type="button">.</button>
          <button className="orange-btn" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
