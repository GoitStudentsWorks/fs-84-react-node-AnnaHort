import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import WelcomePage from './pages/WelcomePage/welcomePage';
import SignInPages from './pages/SignInPages/SignInPages';

import ForgotPasswordPage from './components/ForgotPasswordPage/ForgotPasswordPage';

import MainPage from './pages/MainPage/MainPage';

import { fetchCurentUser } from './redux/auth/authOperations';
import PrivateRoute from '/src/components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import DashboardPage from './pages/DashboardPage/dashboardPage';
import ProfileSettingsPage from '/src/pages/ProfileSettingsPage/ProfileSettingsPage';
import DiaryPage from './pages/DiaryPage/DiaryPage';
<pages></pages>;


const SharedLayout = lazy(() =>
  import('./components/SharedLayout/SharedLayout')
);
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
          <Route path="/welcome" element={<WelcomePage />} />


          <Route
              path="/signup"
              element={
                <RestrictedRoute
                  redirectTo="/main"
                  component={<SignUpPage />}
                />
              }
            />

            <Route
              path="/signin"
              element={
                <RestrictedRoute
                  redirectTo="/signin"
                  component={<SignInPages />}
                />
              }
            />



            

            <Route path="/forgot-password" element={<ForgotPasswordPage />} />


            <Route
              path="/main"
              element={
                <PrivateRoute redirectTo="/welcome" component={<MainPage />} />
              }
            />

            <Route path="/settings" element={<ProfileSettingsPage />} />
            <Route path="/main/diary" element={<DiaryPage/>} />

          </Route>

          <Route path="/dashboard" element={<DashboardPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
