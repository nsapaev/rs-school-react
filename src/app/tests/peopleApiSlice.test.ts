import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import reducer, {
  changeSearchValue,
  setCurrentPage,
  selectCard,
  unselectAllCards,
} from '../../features/people/people-slice';
import { DetailsFetchResultInterface } from '../../types/types';

const initialState = {
  value: '',
  currentPage: 1,
  selectedCards: [],
};

const card: DetailsFetchResultInterface = {
  name: 'Luke Skywalker',
  mass: 'saf',
  birth_year: 'adf0',
  eye_color: 'asdf',
  gender: 'sdf',
  hair_color: 'asdf00',
  height: 'asd0',
  skin_color: 'sdf',
};

describe('searchSlice reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState);
  });

  it('should handle changeSearchValue', () => {
    const newState = reducer(initialState, changeSearchValue('test'));
    expect(newState.value).toBe('test');
  });

  it('should handle setCurrentPage', () => {
    const newState = reducer(initialState, setCurrentPage(5));
    expect(newState.currentPage).toBe(5);
  });

  it('should handle selectCard (add new card)', () => {
    const newState = reducer(initialState, selectCard(card));
    expect(newState.selectedCards).toHaveLength(1);
    expect(newState.selectedCards[0]).toEqual(card);
  });

  it('should handle selectCard (remove existing card)', () => {
    const stateWithCard = { ...initialState, selectedCards: [card] };
    const newState = reducer(stateWithCard, selectCard(card));
    expect(newState.selectedCards).toHaveLength(0);
  });

  it('should handle unselectAllCards', () => {
    const stateWithCards = {
      ...initialState,
      selectedCards: [card, card],
    };
    const newState = reducer(stateWithCards, unselectAllCards());
    expect(newState.selectedCards).toHaveLength(0);
  });
});
