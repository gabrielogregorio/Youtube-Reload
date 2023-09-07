import { Provider } from 'react-redux';
import { store } from '@/connections/store';
import type { ReactElement, ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const MockProviders = ({ children }: { children: ReactNode }): ReactElement => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
