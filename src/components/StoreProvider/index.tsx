'use client';
import { Provider } from 'react-redux';
import { store } from 'src/state/store';

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
