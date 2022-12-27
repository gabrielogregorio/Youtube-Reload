import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { AllPage } from '@/pages/all';
import { Provider } from 'react-redux';
import { store } from '@/connections/store';
import { ScreenEnum } from '@/contracts/homeScreens';
import { LikesPage } from '@/pages/likes';
import { UnlikesPage } from '@/pages/unlikes';
import { ConfigsPage } from '@/pages/configs';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={ScreenEnum.home} element={<HomePage />} />
          <Route path={ScreenEnum.all} element={<AllPage />} />
          <Route path={ScreenEnum.likes} element={<LikesPage />} />
          <Route path={ScreenEnum.unlikes} element={<UnlikesPage />} />
          <Route path={ScreenEnum.configs} element={<ConfigsPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
