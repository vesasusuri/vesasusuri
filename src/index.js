// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Store from './store/store';
// import {Provider} from 'react-redux';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import Store from './store/store';


ReactDOM.render(
  <React.StrictMode>
      <Provider store={Store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);