import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main';
import Postagens from './pages/Postagens';
import Albuns from './pages/Albuns';
import Todo from './pages/Todo';



function App() {
  return (
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route path="/postagens" component={Postagens} />
        <Route path="/albuns" component={Albuns} />
        <Route path="/to-do" component={Todo} />
        

      </BrowserRouter>
  );
}

export default App;
