import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

import * as reducers from './reducers.js';


describe ('seachRobots', () => {

    const initialStateSearch = {
        searchField: ''
    }

    it('should return initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''})
    })


    it('should chanfe  CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type:  CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({searchField: 'abc'})
    })
})

describe('requestRobots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: true
    }


    it('should return initial state', () => {
        expect(reducers.requestRobots(initialStateRobots, {})).toEqual(initialStateRobots)
    })

    it('should handle PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING,
        })).toEqual({robots: [], isPending: true})
    })

    it('should handle SUCCESS', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: {
                id: '123',
                name: 'test'
            }
        })).toEqual({robots: {
                        id: '123', 
                        name: 'test'
                    }, isPending: false})
    })

    it('should handle FAILED', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
        })).toEqual({robots: [], isPending: true, error: undefined})
    })
})