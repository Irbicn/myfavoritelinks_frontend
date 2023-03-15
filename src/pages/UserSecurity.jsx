import { useEffect } from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { localStorageRead } from '../utils/helpers';
import Layout from './Layout';

export default function UserSecurity() {
  const { pathname } = useLocation();
  const token = localStorageRead('token');
  const unlogged = !token && pathname !== '/signin' && pathname !== '/signup';
  const logged =
    (!!token && pathname === '/signin') || (!!token && pathname === '/signup');

  if (logged) {
    return <Navigate to="/links" />;
  }
  if (unlogged) {
    return <Navigate to="/signin" />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
