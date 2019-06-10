import reducer from './notesReducer';

import { NEW_NOTE_PENDING, NEW_NOTE } from '../actions/notesActions';

describe('notes reducer', () => {
  it('handles the pending action', () => {
    const initialState = {
      loading: false,
      list: []
    };
    const newState = reducer(initialState, {
      type: NEW_NOTE_PENDING
    });
    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });

  it('handles the new action', () => {
    const initialState = {
      loading: true,
      list: []
    };
    const newState = reducer(initialState, {
      type: NEW_NOTE,
      payload: {
        title: 'cool title',
        body: 'rad body'
      }
    });
    expect(newState).toEqual({
      loading: false,
      list: [{
        title: 'cool title',
        body: 'rad body'
      }]
    });

  });
});
