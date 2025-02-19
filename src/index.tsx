import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { GlobalContextProvider } from './context/context';
import App from './components/App';
import './index.css';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </Provider>
);
