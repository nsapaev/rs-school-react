import React from 'react';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  onChangeInputValue = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.onChangeInputValue}
        />
        <Bomb inputValue={this.state.inputValue} />
      </>
    );
  }
}

const Bomb = (props) => {
  if (props.inputValue === 'bomb') {
    throw new Error('oops something went wrong');
  }

  return <>{props.inputValue}</>;
};
