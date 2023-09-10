import { Provider } from 'react-redux';
import { store } from '@/connections/store';
import { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

interface IMockProvidersProps {
  children: ReactNode;
}

export const MockProviders = ({ children }: IMockProvidersProps) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
