// You should not need to make changes to this file to complete the initial tasks
// However it is important to understand how/why this works
import { filter, map } from 'rxjs/operators';
import { createNoteService } from './service';

const noteService = createNoteService();

/**
 * Executes note operations attached to actions and dispatches a success action when they are complete
 */
const notesEpic = (action$) => action$.pipe(
    filter((action) => action.noteOperation),
    map((action) => {
        const response = noteService(action.noteOperation.request);
        return action.noteOperation.success(response);
    })
);

export default notesEpic;
