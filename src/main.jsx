import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';

import theme from './style/theme';
import GlobalStyles from './style/global';

import { register } from "swiper/element/bundle";

import { AuthProvider } from './hooks/auth';
import { NotesProvider } from './hooks/notes';
import { TagsProvider } from './hooks/tags';

import Routes from "./routes/index";

register();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
          <NotesProvider>
            <TagsProvider>
              <Routes />
            </TagsProvider>
          </NotesProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
