import {
    LOAD_NOTES,
    LOAD_NOTES_SUCCESS
} from './actions';

const initialState = {
    notes: {}
}

export default function reducer(state = initialState, action) {
    console.log(action);
    switch(action.type){
        case LOAD_NOTES:
            return state;
        case LOAD_NOTES_SUCCESS:
            return {
                ...state,
                notes: action.notes
            };
        default:
            return state;
        }
}
