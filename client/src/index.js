import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './providers/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import { initMiddleware } from 'devise-axios'
import UserJobsProvider from './providers/UserJobsProvider';
import FormDataProvider from './providers/FormDataProvider';
import ThemeProvider from './providers/ThemeProvider';
import JobsProvider from './providers/JobsProvider';

initMiddleware();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <UserJobsProvider>
        <JobsProvider>
          <FormDataProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </FormDataProvider>
        </JobsProvider>
      </UserJobsProvider>
    </AuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
