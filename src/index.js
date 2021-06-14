import React from 'react';
import ReactDOM from 'react-dom';
import MyMoto from './Components/myMoto';
import {UserProvider} from './Contexts/userContext'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <MyMoto/>
    </UserProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);

