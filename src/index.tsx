import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { AllPage } from '@/pages/all';
import { Provider } from 'react-redux';
import { store } from '@/connections/store';
import { FavoritesPage } from '@/pages/favorites';
import { UnlikesPage } from '@/pages/inlikes';
import { ScreenEnum } from '@/contracts/homeScreens';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={ScreenEnum.home} element={<HomePage />} />
          <Route path={ScreenEnum.all} element={<AllPage />} />
          <Route path={ScreenEnum.likes} element={<FavoritesPage />} />
          <Route path={ScreenEnum.unlikes} element={<UnlikesPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
