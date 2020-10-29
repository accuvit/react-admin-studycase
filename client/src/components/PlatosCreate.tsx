import React from 'react';
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

export const PlatosCreate = (props: any) => {
  return (
    <Create title='Create a Plato quote' {...props}>
      <SimpleForm>
        <TextInput multiline source='frase mt loka' />
        <TextInput source='autor' />
      </SimpleForm>
    </Create>
  );
};
