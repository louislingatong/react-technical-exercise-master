import { loadNotesRequest, addNoteRequest, updateNoteRequest, deleteNoteRequest } from './service';

const ns = 'notes/';
export const LOAD_NOTES = `${ns}LOAD_NOTES`;
export const LOAD_NOTES_SUCCESS = `${ns}LOAD_NOTES_SUCCESS`;
export const ADD_NOTE = `${ns}ADD_NOTE`;
export const ADD_NOTE_SUCCESS = `${ns}ADD_NOTE_SUCCESS`;
export const UPDATE_NOTE = `${ns}UPDATE_NOTE`;
export const UPDATE_NOTE_SUCCESS = `${ns}UPDATE_NOTE_SUCCESS`;
export const DELETE_NOTE = `${ns}DELETE_NOTE`;
export const DELETE_NOTE_SUCCESS = `${ns}DELETE_NOTE_SUCCESS`;

export function loadNotes() {
    return {
        type: LOAD_NOTES,
        noteOperation: {
            request: loadNotesRequest(),
            success: loadNotesSuccess
        }
    }
}

export function addNote(data) {
    return {
        type: ADD_NOTE,
        noteOperation: {
            request: addNoteRequest(data),
            success: addNoteSuccess
        }
    }
}

export function updateNote(data) {
    return {
        type: UPDATE_NOTE,
        noteOperation: {
            request: updateNoteRequest(data),
            success: updateNoteSuccess
        }
    }
}

export function deleteNote(id) {
    return {
        type: DELETE_NOTE,
        noteOperation: {
            request: deleteNoteRequest(id),
            success: deleteNoteSuccess
        }
    }
}

function loadNotesSuccess(notes) {
    return {
        type: LOAD_NOTES_SUCCESS,
        notes
    }
}

function addNoteSuccess(note) {
    return {
        type: ADD_NOTE_SUCCESS,
        note
    }
}

function updateNoteSuccess(note) {
    return {
        type: UPDATE_NOTE_SUCCESS,
        note
    }
}

function deleteNoteSuccess(id) {
    return {
        type: DELETE_NOTE_SUCCESS,
        id
    }
}

