import './i18n';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { store } from './redux/store.js';
import 'react-toastify/dist/ReactToastify.css';

import {
  About,
  Landing,
  NotFound,
  ContactUs,
  Faq,
} from './containers/pageListAsync';

import Home from '@/containers/Home';
import Cart from '@/features/AddToCart/Cart';
import Login from './containers/Forms/LogIn';
import Signup from './containers/Forms/SignUp';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="result" element={<div>Result Page</div>} />
              <Route path="lotteries" element={<div>Lottery Page</div>} />
              <Route path="faq" element={<Faq />} />
              <Route path="cart" element={<Cart />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="colored"
        />
      </Provider>
    </>
  );
}

export default App;
