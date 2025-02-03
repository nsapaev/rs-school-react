import React from 'react';
import S from './searchComponent.module.css';
import { fetchRequest } from './helpers';
import { Table } from '../table/table';
import { Loader } from '../Loader/loader';
import { CallError } from '../CallError/callError';

interface SearchComponentPropsInterface {}
interface SearchComponentStateInterface {
  inputValue: string;
  fetchResult: [];
  isLoading: boolean;
}

export class SearchComponent extends React.Component<
  SearchComponentPropsInterface,
  SearchComponentStateInterface
> {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: localStorage.getItem('inputValue') ?? '',
      fetchResult: [],
      isLoading: false,
    };
  }
  onChangeInputValue = (e) => {
    this.setState({ ...this.state, inputValue: e.target.value });
  };

  componentDidMount() {
    const lSValue = localStorage.getItem('inputValue');
    fetchRequest(lSValue ?? '').then((data) => {
      this.setState({ ...this.state, fetchResult: data });
    });
  }

  onSendSearchValue = () => {
    localStorage.setItem('inputValue', this.state.inputValue.trim());
    this.setState({ ...this.state, isLoading: true });
    fetchRequest(this.state.inputValue.trim() ?? '').then((data) => {
      this.setState({ ...this.state, isLoading: false, fetchResult: data });
    });
  };

  componentDidUpdate() {
    console.log(this.state.isLoading);
  }

  render() {
    return (
      <div>
        <div
          style={{
            marginBottom: '100px',
          }}
        >
          <div className={S.container}>
            <input
              placeholder="Search by name"
              type="text"
              value={this.state.inputValue}
              onChange={this.onChangeInputValue}
            />
            <button className={S.customButton} onClick={this.onSendSearchValue}>
              search
            </button>
          </div>
        </div>

        {!!this.state.fetchResult.length && (
          <Table tableData={this.state.fetchResult} />
        )}
        {this.state.isLoading && <Loader />}
        <CallError />
      </div>
    );
  }
}
