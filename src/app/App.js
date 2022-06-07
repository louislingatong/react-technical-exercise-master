import React, { useEffect, useMemo, useState } from 'react';
import { Provider } from 'react-redux';
import Crontab from 'reactjs-crontab';
import moment from 'moment';
import NotesContainer from './notes/components/NotesContainer';
import { ThemeProvider } from 'styled-components';
import store from './store';
import { lightTheme, darkTheme } from './theme';

const App = () => {
    const [isDarkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        const now = moment();

        // Set 18:00 of the current day as start of dark theme
        const startOfDarkTheme = moment({ hour: 18 });

        // Set 6:00 of the following day as end of dark theme
        const endOfDarkTheme = moment({ hour: 6 }).add(1, 'day');

        // Set Dark theme if current datetime is within the start of dark theme and end of dark theme
        const isDarkTheme = now.isBetween(startOfDarkTheme, endOfDarkTheme);

        // Set default theme
        handleChangeTheme(isDarkTheme);
    }, []);

    /**
     * Set theme to dark mode
     */
    const handleChangeLightTheme = () => setDarkTheme(false);

    /**
     * Set theme to light mode
     */
    const handleChangeDarkTheme = () => setDarkTheme(true);

    /**
     * Update theme with condition. If true set theme to dark. else, set theme to light
     * @param themeFlag
     */
    const handleChangeTheme = (themeFlag) => {
        themeFlag ? handleChangeDarkTheme() : handleChangeLightTheme();
    };

    /**
     * Get active theme
     * @returns {{noteBackground: string, noteHoverBackground: string, buttonText: string, addNoteInputTextColor: string, pageTitle: string, addNoteInputShadow: string, addNoteContainerBorder: string, fontSizes: {epsilon: number, alpha: number, beta: number, gamma: number}, space: number[], buttonBackground: string, pageBackground: string, pageFontColor: string, noteBorderStyle: string, addNoteInputBorder: string, addNoteContainerBackground: string, textFieldFocusBackground: string}|{noteBackground: string, noteHoverBackground: string, buttonText: string, addNoteInputTextColor: string, pageTitle: string, addNoteInputShadow: string, addNoteContainerBorder: string, fontSizes: {epsilon: number, alpha: number, beta: number, gamma: number}, space: number[], buttonBackground: string, pageBackground: string, pageFontColor: string, noteBorderStyle: string, addNoteInputBorder: string, addNoteContainerBackground: string, textFieldFocusBackground: string}}
     */
    const theme = () => isDarkTheme ? darkTheme : lightTheme;

    /**
     * Initialize scheduler settings. Set custom schedule via environment variables
     * @type {[{fn: (function(): void), config: (*|string)}, {fn: (function(): void), config: (*|string)}]}
     */
    const tasks = useMemo(() => [
        {
            fn: handleChangeLightTheme,
            config: process.env.REACT_APP_LIGHT_THEME_SCHEDULE || '0 6 * * *'
        },
        {
            fn: handleChangeDarkTheme,
            config: process.env.REACT_APP_DARK_THEME_SCHEDULE || '0 18 * * *'
        },
    ], []);

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Crontab
                    tasks={tasks}
                    timeZone='local'
                    dashboard={{
                        hidden: true,
                    }}
                />
                <NotesContainer handleChangeTheme={handleChangeTheme} darkTheme={isDarkTheme}/>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
