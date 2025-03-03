'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import style from './style.module.css';
import { useAppDispatch } from '../../state/hooks';
import { changeSearchValue } from '../../features/people/people-slice';
import { setCurrentPage } from '../../features/people/people-slice';

export const SearchComponent: React.FC = () => {
  const { push } = useRouter();
  const details = useSearchParams().get('details');
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>('');

  console.log('details', details);

  useEffect(() => {
    setValue(localStorage.getItem('search') || '');
  }, []);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSendSearchValue = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem('search', value.trim());
    dispatch(changeSearchValue(value.trim()));
    dispatch(setCurrentPage(1));
    push(`/?search=${value.trim()}${details ? `&details=${details}` : ''}`);
  };

  return (
    <form onSubmit={onSendSearchValue}>
      <div className={style.container}>
        <input
          className={style.input}
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
