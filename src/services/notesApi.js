import { post } from './request';
import { get } from 'https';

export const createNote = note => post('/api/v1/notes', note);
export const getNotes = () =>  get('/api/v1/notes');

