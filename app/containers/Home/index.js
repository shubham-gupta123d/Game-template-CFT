import React from 'react';
import RoyalLotto from './RoyalLotto';
import Lottery from './Lottery';
import Contactus from './Contactus';
import CasinoSection from './CasinoSection';
import Bingo from './Bingo';

const Home = () => {
  return (
    <div>
      <RoyalLotto />
      <Lottery />
      <Bingo />
      <CasinoSection />
      <Contactus />
    </div>
  );
};

export default Home;
