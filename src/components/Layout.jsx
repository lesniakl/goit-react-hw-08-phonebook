import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import TopBar from './AppBar/AppBar';
import { CircularProgress } from '@mui/material';

export default function Layout() {
  return (
    <div>
      <TopBar />
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
