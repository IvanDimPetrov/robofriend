import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

import * as actions from './actions.js';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);

it('should create action to search robots', () => {
    const text = 'wooo';

    expect(actions.setSearchField(text)).toEqual({
        type: CHANGE_SEARCHFIELD,
        payload: 'wooo'
    })
})

it('handle requestion robots', () => {

    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    console.log(action)
    expect(action[0]).toEqual({
        type: REQUEST_ROBOTS_PENDING
    })
})