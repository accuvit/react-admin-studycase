import React from 'react';
import { List, Datagrid, TextField, DeleteButton } from 'react-admin';

export const PlatosList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='frase mt loka' />
        <TextField source='autor' />
        <DeleteButton basePath='./platos' />
      </Datagrid>
    </List>
  );
};
