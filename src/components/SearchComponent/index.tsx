import React, { useState } from 'react';

import style from './style.module.css';
import { useAppDispatch } from '../../app/hooks';
import { changeSearchValue } from '../../features/people/people-slice';
import { setCurrentPage } from '../../features/people/people-slice';

export const SearchComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>(
    localStorage.getItem('search') || ''
  );

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSendSearchValue = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem('search', value.trim());
    dispatch(changeSearchValue(value.trim()));
    dispatch(setCurrentPage(1));
  };

  return (
    <form style={{ marginBottom: '100px' }} onSubmit={onSendSearchValue}>
      <div className={style.container}>
        <input
          placeholder="Search by name"
          type="text"
          value={value}
          onChange={onChangeValue}
        />
        <button
          type="submit"
          className={style.customButton}
          onClick={onSendSearchValue}
        >
          search
        </button>
      </div>
    </form>
  );
};
