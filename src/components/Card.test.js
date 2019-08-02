import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card.js';


it('expect to render Card component', () =>  {

    const card = {
        id: 1,
        name: 'Dan4eto',
        email: 'emili@dsfds.com'
    }

    expect(shallow(<Card id={card.id} name={card.name} email={card.email}/>)).toMatchSnapshot();
})
