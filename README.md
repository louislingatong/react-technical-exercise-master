# React Technical Exercise

We use a collection of modern javascript technologies in our frontend stack.<br>
This example exercise is bootstraped with [Create React App](https://github.com/facebook/create-react-app) and includes:
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Observable](https://redux-observable.js.org/) ( [RxJS](https://rxjs-dev.firebaseapp.com/) )
- [Styled Components](https://www.styled-components.com/)

### Setup
Please clone this repo, complete the tasks below and send us your solution as a zip file (don't include node_modules).

You will need [node and npm](https://nodejs.org/) installed.

```
npm install
npm run start
```

## Tasks
### Do you have a good understanding of the technologies we use? (~2-3hrs depending on experience)

The sample application currently loads a list of notes.

1. Extract the #addNoteWrapper div in src/app/notes/components/Notes.js into a new component
1. Wire up this new component to dispatch and handle the appropriate redux actions
1. Add a hover effect to notes based on theme variables
1. Create a new Dark theme
1. Extract the #themeToggle button in Notes.js to a new component that toggles between the Light and Dark themes
1. Improve the look and feel of this toggle component
1. Add the ability to delete a note

Add comments and unit tests to your code where appropriate.
If you need to skip a task that is fine, make sure you submit a working solution.

## Extra credit
### Can you think creatively and come up with your own solutions?

Pick from our suggestions below or implement something of your own design.

- Make notes editable inline (updateNoteRequest exists in the service)
    - Auto-save edits to notes
- Have the theme change automatically depending on time of day
- Touch up the design to add your own flare

Thanks for all your efforts. We look forward to seeing what you come up with.

Actionstep Frontend Team.
