import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  EditButton,
  DeleteButton,
} from 'react-admin';

export const PratosList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='nome' />
        <DateField source='data-adicionada' />
        <NumberField source='calorias' />
        <EditButton basePath='/pratos' />
        <DeleteButton basePath='/prats' />
      </Datagrid>
    </List>
  );
};
