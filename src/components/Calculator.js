import React, {useState} from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [object, setObject] = useState({});
  
  const whenClicked = (e) => {
    const buttonName = e.target.textContent;
    const newObj = calculate(object, buttonName);
    setObject(newObj);
  };

    const buttonNames = ['AC', '+/-', '%', '\u00F7', '7', '8', '9', '\u00D7',
      '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    const generateClassName = (button) => {
      if (button === '\u00F7' || button === '\u00D7' || button === '-' || button === '+' || button === '=') {
        return 'orange-btn';
      }

      if (button === '0') {
        return 'double-space';
      }
      return '';
    };

    const { next, total, operation } = this.state;
    let result = '';
    if (total) {
      result = `${total} ${operation || ''} ${next || ''}`;
    } else if (next) {
      result = next;
    }
    return (
      <div className="container-cal">
        <div className="cal-screen">
          {result}
        </div>
        <div className="buttons">
          {buttonNames.map((button) => (<button key={button} className={generateClassName(button)} onClick={this.whenClicked} type="button">{button}</button>))}
        </div>
      </div>
    );
}

export default Calculator;
