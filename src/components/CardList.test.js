import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList.js';


it('expect to render Card List component', () =>  {
    const robots = [
        {
            id: 1,
            name: 'John Snow',
            usermname: 'Dankata',
            email:  'john@johm.com'
        }
    ]
    expect(shallow(<CardList robots={ robots }/>)).toMatchSnapshot();
})
