import { FC, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Routes as AppRoutes } from './routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssVarsProvider, extendTheme } from '@mui/joy';

import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import '@fontsource/inter';
import SafeAreaView from './modules/mobile/safe-area/SafeAreaView';
import { StatusBar } from '@capacitor/status-bar';
import { Keyboard } from '@capacitor/keyboard';

const App: FC = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    // Configure the status bar when the component mounts
    Keyboard.setScroll({ isDisabled: true });
    StatusBar.setOverlaysWebView({ overlay: true });
    StatusBar.setBackgroundColor({ color: '#ffffff' });
  }, []);

  return (
    <SafeAreaView>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            {AppRoutes.map((route, index: number) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children &&
                  route.children.map((child, index) => <Route key={index} path={child.path} element={child.element} />)}
              </Route>
            ))}
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </SafeAreaView>
  );
};

export default App;
