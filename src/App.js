import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Activities from './containers/activiteis';
import Schedule from './containers/schedule/';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorMessage from './components/toasts/ErrorMessage';

const store = configureStore();
function App() {
  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);
  
  return (
    <Provider store={store}>
      <div className="App">
        <ErrorMessage />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Activities />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
