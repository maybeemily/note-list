import React, { PureComponent } from 'react';
import NoteForm from '../../components/notes/NoteForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newNote } from '../../actions/notesActions';

class CreateNote extends PureComponent {
  static propTypes = {
    createNote: PropTypes.func.isRequired
  }

  state = {
    title: '',
    body: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;
    this.props.createNote({ title, body });
    this.setState({ title: '', body: '' });
  }

  render() {
    const { title, body } = this.state;
    return (
      <NoteForm onSubmit={this.handleSubmit} onChange={this.handleChange} title={title} body={body} buttonText="Create Note"/>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  createNote(note) {
    dispatch(newNote(note));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateNote);
