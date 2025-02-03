import { Component } from 'react';
import S from './searchComponent.module.css';
import { fetchRequest } from './helpers';
import { Table } from '../table/table';
import { Loader } from '../Loader/loader';
import { CallError } from '../CallError/callError';

interface SearchComponentStateInterface {
  inputValue: string;
  fetchResult: Array<{
    name: string;
    birth_year: string;
    gender: string;
    height: string;
    hair_color: string;
    eye_color: string;
  }>;
  isLoading: boolean;
}

export class SearchComponent extends Component<
  object,
  SearchComponentStateInterface
> {
  constructor(props: object) {
    super(props);
    const savedInputValue = localStorage.getItem('inputValue');
    this.state = {
      inputValue: savedInputValue ?? '',
      fetchResult: [],
      isLoading: false,
    };
  }

  onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  componentDidMount() {
    const lSValue = localStorage.getItem('inputValue');
    fetchRequest(lSValue ?? '').then((data) => {
      this.setState({ fetchResult: data });
    });
  }

  onSendSearchValue = () => {
    const { inputValue } = this.state;
    localStorage.setItem('inputValue', inputValue.trim());
    this.setState({ isLoading: true });
    fetchRequest(inputValue.trim()).then((data) => {
      this.setState({ isLoading: false, fetchResult: data });
    });
  };

  componentDidUpdate(prevState: SearchComponentStateInterface) {
    if (prevState.isLoading !== this.state.isLoading) {
      console.log(this.state.isLoading);
    }
  }

  render() {
    const { inputValue, fetchResult, isLoading } = this.state;

    return (
      <div>
        <div style={{ marginBottom: '100px' }}>
          <div className={S.container}>
            <input
              placeholder="Search by name"
              type="text"
              value={inputValue}
              onChange={this.onChangeInputValue}
            />
            <button className={S.customButton} onClick={this.onSendSearchValue}>
              search
            </button>
          </div>
        </div>

        {!!fetchResult.length && <Table tableData={fetchResult} />}
        {isLoading && <Loader />}
        <CallError />
      </div>
    );
  }
}
