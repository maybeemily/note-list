import React from 'react';
import PropTypes from 'prop-types';

function NoteForm({ onSubmit, onChange, title, body, buttonText }) {
  return (
    <form onSubmit={onSubmit}>
      <input name="title" value={title} onChange={onChange}/>
      <textarea name="body" value={body} onChange={onChange}/>
      <button>{buttonText}</button>
    </form>
  );
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  buttonText: PropTypes.string
};

NoteForm.defaultProps = {
  buttonText: 'Submit'
};

export default NoteForm;
