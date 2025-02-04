import { Component } from 'react';
import style from './searchComponent.module.css';

interface SearchComponentPropsInterface {
  inputValue: string;
  handleInputChange: (value: string) => void;
  onSendSearchValue: () => void;
}

export class SearchComponent extends Component<
  SearchComponentPropsInterface,
  object
> {
  render() {
    return (
      <form style={{ marginBottom: '100px' }}>
        <div className={style.container}>
          <input
            placeholder="Search by name"
            type="text"
            value={this.props.inputValue}
            onChange={(e) => {
              this.props.handleInputChange(e.target.value);
            }}
          />
          <button
            className={style.customButton}
            onClick={this.props.onSendSearchValue}
          >
            search
          </button>
        </div>
      </form>
    );
  }
}
