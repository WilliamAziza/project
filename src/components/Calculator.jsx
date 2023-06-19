import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      firstOperand: null,
      operator: null,
      waitingForSecondOperand: false
    };
  }

  handleDigitClick = (digit) => {
    const { displayValue, waitingForSecondOperand } = this.state;

    if (waitingForSecondOperand) {
      this.setState({
        displayValue: digit,
        waitingForSecondOperand: false
      });
    } else {
      this.setState({
        displayValue: displayValue === '0' ? digit : displayValue + digit
      });
    }
  };

  handleOperatorClick = (nextOperator) => {
    const { displayValue, firstOperand, operator } = this.state;
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      this.setState({
        firstOperand: inputValue
      });
    } else if (operator) {
      const result = this.performCalculation();
      this.setState({
        displayValue: result,
        firstOperand: result
      });
    }

    this.setState({
      waitingForSecondOperand: true,
      operator: nextOperator
    });
  };

  performCalculation = () => {
    const { displayValue, firstOperand, operator } = this.state;
    const secondOperand = parseFloat(displayValue);

    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      return firstOperand / secondOperand;
    }

    return secondOperand;
  };

  handleEqualClick = () => {
    const { operator } = this.state;

    if (!operator) return;

    const result = this.performCalculation();
    this.setState({
      displayValue: result,
      firstOperand: result,
      operator: null,
      waitingForSecondOperand: true
    });
  };

  handleClearClick = () => {
    this.setState({
      displayValue: '0',
      firstOperand: null,
      operator: null,
      waitingForSecondOperand: false
    });
  };

  render() {
    const { displayValue } = this.state;

    return (
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <div className="keypad">
          <button onClick={this.handleClearClick}>AC</button>
          <button onClick={() => this.handleDigitClick('7')}>7</button>
          <button onClick={() => this.handleDigitClick('8')}>8</button>
          <button onClick={() => this.handleDigitClick('9')}>9</button>
          <button onClick={() => this.handleOperatorClick('/')}>/</button>
          <button onClick={() => this.handleDigitClick('4')}>4</button>
          <button onClick={() => this.handleDigitClick('5')}>5</button>
          <button onClick={() => this.handleDigitClick('6')}>6</button>
          <button onClick={() => this.handleOperatorClick('*')}>*</button>
          <button onClick={() => this.handleDigitClick('1')}>1</button>
          <button onClick={() => this.handleDigitClick('2')}>2</button>
          <button onClick={() => this.handleDigitClick('3')}>3</button>
          <button onClick={() => this.handleOperatorClick('-')}>-</button>
          <button onClick={() => this.handleDigitClick('0')}>0</button>
          <button onClick={() => this.handleOperatorClick('.')}>.</button>
          <button onClick={this.handleEqualClick}>=</button>
          <button onClick={() => this.handleOperatorClick('+')}>+</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
