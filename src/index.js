import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './app/store'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <ChakraProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ChakraProvider>
  </Provider>
);


