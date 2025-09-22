import React, { Fragment } from 'react';
import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';

function Landing() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Landing;
