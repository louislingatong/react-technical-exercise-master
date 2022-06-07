import { loadNotesRequest, addNoteRequest } from './service';

const ns = 'notes/';
export const LOAD_NOTES = `${ns}LOAD_NOTES`;
export const LOAD_NOTES_SUCCESS = `${ns}LOAD_NOTES_SUCCESS`;

export function loadNotes() {
    return {
        type: LOAD_NOTES,
        noteOperation: {
            request: loadNotesRequest(),
            success: loadNotesSuccess
        }
    }
}

function loadNotesSuccess(notes) {
    return {
        type: LOAD_NOTES_SUCCESS,
        notes
    }
}
