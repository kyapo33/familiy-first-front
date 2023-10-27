import { FC, useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Routes as AppRoutes } from './routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
import { Preferences } from '@capacitor/preferences';
import { useUserStore } from './assets/store/UserStore';
import { RoutesPath } from './routes/Paths';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from './hooks/queries/useGetUserProfile';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false // default: true
    }
  }
});

const App: FC = () => {
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    // Configure the status bar when the component mounts
    Keyboard.setScroll({ isDisabled: true });
    StatusBar.setOverlaysWebView({ overlay: true });
    StatusBar.setBackgroundColor({ color: '#ffffff' });
  }, []);

  const checkUser = useCallback(async () => {
    const { value } = await Preferences.get({ key: 'token' });
    if (!value) {
      navigate(RoutesPath.Login);
      return;
    }
    const newUser = await getUserProfile();
    setUser({ ...newUser });
  }, [setUser, navigate]);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <SafeAreaView>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} position="left" />
        <Routes>
          {AppRoutes.map((route, index: number) => (
            <Route key={index} path={route.path} element={route.element}>
              {route.children &&
                route.children.map((child, index) => <Route key={index} path={child.path} element={child.element} />)}
            </Route>
          ))}
        </Routes>
      </QueryClientProvider>
    </SafeAreaView>
  );
};

export default App;
