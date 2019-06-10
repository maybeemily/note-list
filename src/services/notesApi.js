export const createNote = note => {
  return Promise.resolve({
    _id: '112233',
    ...note
  });
};
