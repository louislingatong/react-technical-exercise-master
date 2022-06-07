// You should not make changes to this file to complete the initial tasks
// This is just mocking an external service

/**
 * Available note operations
 */
const operations = {
    LOAD: 'load',
    ADD: 'add',
    UPDATE: 'update',
    DELETE: 'delete'
};

/**
 * Returns a function which executes note requests
 */
const createNoteService = () => {
    let notes = {
        1: {
            id: 1,
            text: 'test note 1',
        },
        2: {
            id: 2,
            text: 'test note 2',
        }
    }
    let lastId = 2;

    const noteService = (request) => {
        switch(request.operation){
        case operations.LOAD:
            return notes;
        case operations.ADD:
            const id = lastId + 1;
            const newNote = {
                id,
                text: request.params.text
            }
            notes[id] = newNote;
            lastId = id;
            return newNote;
        case operations.UPDATE:
            const note = request.params.note;
            const updated = {
                ...notes[note.id],
                ...note
            }
            notes[note.id] = updated;
            return updated;
        case operations.DELETE:
            delete notes[request.params.id];
            return request.params.id
        default:
            return;
        }
    }

    return noteService;
}

export { createNoteService };

/**
 * When executed returns all notes
 * @returns {object} - a load notes request object
 */
export function loadNotesRequest()  {
    return {
        operation: operations.LOAD
    };
}

/**
 * When exectued returns the note that was added
 * @param {string} text - the text of the note to be added
 * @returns {object} - an add note request object
 */
export function addNoteRequest(text)  {
    return {
        operation: operations.ADD,
        params: {
            text
        }
    };
}

/**
 * When exectued returns true if successful
 * Returns
 * @param {string} id - the id of the note to be deleted
 * @returns {object} - a delete note request object
 */
export function deleteNoteRequest(id)  {
    return {
        operation: operations.DELETE,
        params: {
            id
        }
    };
}

/**
 * When exectued returns the note that was updated
 * @param {object} note - a partial note object with the values to be updated set
 * @returns {object} - an update note request object
 */
export function updateNoteRequest(note)  {
    return {
        operation: operations.UPDATE,
        params: {
            note
        }
    };
}
