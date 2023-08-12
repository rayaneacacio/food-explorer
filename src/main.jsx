import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';

import theme from './style/theme';
import GlobalStyles from './style/global';

import { AdminProvider } from './hooks/isAdmin';

import Routes from "./routes/index";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AdminProvider>
        <Routes />
      </AdminProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
