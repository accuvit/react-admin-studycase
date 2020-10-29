import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import { PratosList } from './components/PratosList';
import { PlatosList } from './components/PlatosList';
import { PlatosCreate } from './components/PlatosCreate';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='pratos' list={ListGuesser}></Resource>
      <Resource name='platos' list={PlatosList} create={PlatosCreate} />
    </Admin>
  );
}

export default App;
