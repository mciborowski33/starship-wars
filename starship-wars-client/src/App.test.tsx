import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('displays the title', () => {
	mount(<App />);
	cy.get('div').contains('Starships Wars');
});
