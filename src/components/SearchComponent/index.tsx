import { Component } from 'react';
import style from './style.module.css';

interface SearchComponentPropsInterface {
  inputValue: string;
  handleInputChange: (value: string) => void;
  onSendSearchValue: () => void;
}

export const SearchComponent: React.FC<SearchComponentPropsInterface> = ({
  handleInputChange,
  inputValue,
  onSendSearchValue,
}) => {
  return (
    <form style={{ marginBottom: '100px' }}>
      <div className={style.container}>
        <input
          placeholder="Search by name"
          type="text"
          value={inputValue}
          onChange={(e) => {
            handleInputChange(e.target.value);
          }}
        />
        <button className={style.customButton} onClick={onSendSearchValue}>
          search
        </button>
      </div>
    </form>
  );
};
