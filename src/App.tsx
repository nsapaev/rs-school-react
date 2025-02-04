import { Component } from 'react';

import style from './App.module.css';
import { SearchComponent } from './components/SearchComponent';
import { Table } from './components/Table';
import { fetchRequest } from './helpers/helpers';
import { FallBack } from './components/FallBack';
import { CallError } from './components/CallError';
import { Loader } from './components/Loader';

interface SearchComponentState {
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
  searchedValue: string;
}

class App extends Component<unknown, SearchComponentState> {
  constructor(props: object) {
    super(props);
    const savedInputValue = localStorage.getItem('inputValue');
    this.state = {
      inputValue: savedInputValue ?? '',
      fetchResult: [],
      isLoading: false,
      searchedValue: '',
    };
  }

  componentDidMount() {
    const lSValue = localStorage.getItem('inputValue');
    this.setState({ isLoading: true });

    fetchRequest(lSValue ?? '')
      .then((data) => {
        this.setState({ fetchResult: data, isLoading: false });
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        this.setState({
          isLoading: false,
          searchedValue: this.state.inputValue.trim(),
        });
      });
  }

  onSendSearchValue = () => {
    const { inputValue } = this.state;
    localStorage.setItem('inputValue', inputValue.trim());
    this.setState({ isLoading: true });

    try {
      fetchRequest(inputValue.trim()).then((data) => {
        this.setState({
          isLoading: false,
          fetchResult: data,
          searchedValue: inputValue.trim(),
        });
      });
    } catch {
      throw new Error('something went wrong (:');
    } finally {
      this.setState({
        isLoading: false,
        searchedValue: this.state.inputValue.trim(),
      });
    }
  };

  handleInputChange = (value: string) => {
    this.setState({ inputValue: value });
  };

  render() {
    return (
      <div className={style.body}>
        <header>
          <SearchComponent
            inputValue={this.state.inputValue}
            handleInputChange={this.handleInputChange}
            onSendSearchValue={this.onSendSearchValue}
          />
        </header>

        <main>
          {!!this.state.fetchResult.length ? (
            <Table tableData={this.state.fetchResult} />
          ) : (
            !this.state.isLoading && (
              <>
                upon request <b>{this.state.searchedValue} </b> no data
              </>
            )
          )}
          {this.state.isLoading && <Loader />}
        </main>

        <footer>
          <CallError />
        </footer>
      </div>
    );
  }
}

export default App;
