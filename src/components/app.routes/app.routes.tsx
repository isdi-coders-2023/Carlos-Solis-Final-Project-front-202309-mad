import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('../pages/home.page'));
const LoginPage = lazy(() => import('../pages/login.page'));
const RegisterPage = lazy(() => import('../pages/register.page'));
const ErrorPage = lazy(() => import('../pages/error.page'));
const CreateMonumentPage = lazy(() => import('../pages/create.monument.page'));
const DetailsPage = lazy(() => import('../pages/details.page'));
const EditMonumentPage = lazy(() => import('../pages/edit.page'));
export const AppRoutes = () => (
  <Suspense>
    <Routes>
      <Route path="/" element={<LoginPage></LoginPage>}></Route>
      <Route path="/home" element={<HomePage></HomePage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
      <Route
        path="/create"
        element={<CreateMonumentPage></CreateMonumentPage>}
      ></Route>
      <Route
        path="/editpage/:id"
        element={<EditMonumentPage></EditMonumentPage>}
      ></Route>
      <Route path="/details/:id" element={<DetailsPage></DetailsPage>}></Route>
      <Route path="/error" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  </Suspense>
);
