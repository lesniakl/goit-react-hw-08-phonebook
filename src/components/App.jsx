import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import Layout from './Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { refreshUser } from '../redux/auth/operations';
import { LinearProgress } from '@mui/material';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <LinearProgress />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
