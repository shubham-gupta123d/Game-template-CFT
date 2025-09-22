import React from 'react';
import { MoonLoader } from 'react-spinners';

const Loading = () => {
  return (
    <>
      <div className="loading-container flex justify-center items-center h-screen ">
        <MoonLoader size={50} color="#36d7b7" />
      </div>
    </>
  );
};

export default Loading;
