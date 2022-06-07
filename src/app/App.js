import React from 'react';
import { Provider } from 'react-redux';
import NotesContainer from './notes/components/NotesContainer';
import { ThemeProvider } from 'styled-components';
import store from './store';
import theme from './theme';

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <NotesContainer />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
