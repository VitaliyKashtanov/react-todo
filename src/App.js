import React from 'react';

import HeaderContainer from './containers/HeaderContainer';
import FormContainer from './containers/FormContainer';
import ListOfTodosContainer from './containers/ListOfTodosContainer';

const App = () => (
  <main>
    <HeaderContainer />
    <ListOfTodosContainer />
    <FormContainer />
  </main>
);


export default App;
