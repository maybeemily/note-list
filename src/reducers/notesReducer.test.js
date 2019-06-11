import reducer from './notesReducer';

import { NEW_NOTE_PENDING, NEW_NOTE, FETCH_NOTES_PENDING, FETCH_NOTES } from '../actions/notesActions';

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

  it('handles the fetch pending action', () => {
    const initialState = {
      loading: false,
      list: []
    };

    const newState = reducer(initialState, {
      type: FETCH_NOTES_PENDING
    });

    expect(newState).toEqual({
      loading: true,
      list: []
    });

  });

  it('handles the fetch notes action', () => {
    const initialState = {
      loading: false,
      list: []
    };

    const newState = reducer(initialState, {
      type: FETCH_NOTES,
      payload: [{ title: 'title', body: 'cool body' }]
    });
    
    expect(newState).toEqual({
      loading: false,
      list: [{ title: 'title', body: 'cool body' }]
    });

  });
});
