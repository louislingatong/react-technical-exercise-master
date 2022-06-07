import { connect } from 'react-redux';
import Notes from './Notes';
import { loadNotes, addNote, updateNote, deleteNote }  from '../state';

function mapStateToProps(state, ownProps) {
    return {
        notes: state.notes
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        loadNotes: () => {
            dispatch(loadNotes());
        },
        addNote: (data) => {
            dispatch(addNote(data));
        },
        updateNote: (data) => {
            dispatch(updateNote(data));
        },
        deleteNote: (id) => {
            dispatch(deleteNote(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
