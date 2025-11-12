import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { AppProvider } from '@/contexts/AppContext';
import { AppRoutes } from '@/Routes/routes';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { globalCss } from '@/styles/theme';
import '@/styles/globals.css';

const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
    padding: 0,
    fontFamily: '$body',
    backgroundColor: '$background',
    color: '$text',
  },
});

const App: React.FC = () => {
  globalStyles();

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider>
            <AuthProvider>
              <AppProvider>
                <AppRoutes />
              </AppProvider>
            </AuthProvider>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;

