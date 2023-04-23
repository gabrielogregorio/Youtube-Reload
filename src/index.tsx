import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/connections/store';
// import { ScreenEnum } from '@/contracts/homeScreens';
import { BaseScreens } from '@/pages/base';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<BaseScreens />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
