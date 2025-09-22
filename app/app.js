import './i18n';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import createReducer from './redux/reducers';
import rootSaga from './redux/rootSaga';
import {
  About,
  Landing,
  NotFound,
  ContactUs,
  Faq,
} from './containers/pageListAsync';

import Home from '@/containers/Home';

const sagaMiddleware = createSagaMiddleware();
const reducer = createReducer();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about" element={<ContactUs />} />
            <Route
              path="/contact"
              element={
                <div>
                  <ContactUs />
                </div>
              }
            />
            <Route path="/result" element={<div>Result Page</div>} />
            <Route path="/lotteries" element={<div>Lottery Page</div>} />
            <Route path="/faq" element={<Faq />} />
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
  );
}

export default App;
