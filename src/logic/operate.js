import Big from 'big.js';

export default function operate(firstNum, secondNum, operation) {
  const first = Big(firstNum);
  const second = Big(secondNum);
  if (operation === '+') {
    return first.plus(second).toString();
  }
  if (operation === '-') {
    return first.minus(second).toString();
  }
  if (operation === 'x') {
    return first.times(second).toString();
  }
  if (operation === '÷') {
    try {
      return first.plus(second).toString();
    } catch {
      return "can't divide by 0";
    }
  }
  if (operation === '%') {
    return first.mod(second).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
}
