import {
    LOAD_NOTES,
    LOAD_NOTES_SUCCESS,
    ADD_NOTE,
    ADD_NOTE_SUCCESS,
    UPDATE_NOTE,
    UPDATE_NOTE_SUCCESS,
    DELETE_NOTE,
    DELETE_NOTE_SUCCESS,
} from './actions';

const initialState = {
    notes: {}
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_NOTES:
            return state;
        case LOAD_NOTES_SUCCESS:
            return {
                ...state,
                notes: action.notes
            };
        case ADD_NOTE:
            return state;
        case ADD_NOTE_SUCCESS:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    [action.note.id]: action.note
                }
            };
        case UPDATE_NOTE:
            return state;
        case UPDATE_NOTE_SUCCESS:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    [action.note.id]: action.note
                }
            };
        case DELETE_NOTE:
            return state;
        case DELETE_NOTE_SUCCESS:
            const notes = {...state.notes};
            delete notes[action.id];
            return {
                ...state,
                notes
            };
        default:
            return state;
    }
}
