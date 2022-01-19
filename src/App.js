import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Activities from './containers/activiteis';
import Schedule from './containers/schedule/';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import ErrorMessage from "./components/toasts/ErrorMessage";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ErrorMessage />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Activities/>} />
          <Route path="/schedule" element={<Schedule/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
