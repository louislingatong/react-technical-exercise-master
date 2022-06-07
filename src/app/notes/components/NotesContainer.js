import { connect } from 'react-redux';
import Notes from './Notes';
import { loadNotes }  from '../state';

function mapStateToProps(state, ownProps) {
    return {
        notes: state.notes
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        loadNotes: () => {
            dispatch(loadNotes());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
