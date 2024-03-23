import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import dotenv from 'dotenv';
// dotenv.config();

// const CLIENT_ID_GOOGLE = process.env.CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter basename="/kapusta-team-project">
        <GoogleOAuthProvider clientId="896443968306-n7f9q7grr1i8sqjmot8rfph8ff86ijkj.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
