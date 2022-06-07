const defaultTheme = {
    space: [0, 4, 8, 16, 32],
    fontSizes: {
        alpha: 48,
        beta: 32,
        gamma: 24,
        epsilon: 16
    }
}

const lightTheme = {
    ...defaultTheme,
    pageFontColor: '#000',
    pageBackground: '#fff',
    pageTitle: 'blueViolet',

    addNoteContainerBackground: 'rgba(189,197,209,.2)',
    addNoteContainerBorder: '1px solid rgba(231,234,243,.7)',
    addNoteInputBorder: '1px solid rgba(231,234,243,.7)',
    addNoteInputTextColor: '#1e2022',
    addNoteInputShadow: '0 0 1rem 0 rgb(140 152 164 / 25%)',

    noteBackground: '#f8f8f8',
    noteHoverBackground: 'rgba(189,197,209,.2)',
    noteBorderStyle: '1px solid rgba(231,234,243,.7)',

    textFieldFocusBackground: 'rgba(231,234,243,.7)',

    buttonBackground: 'blueViolet',
    buttonText: 'white'
};

const darkTheme = {
    ...defaultTheme,
    pageFontColor: '#fff',
    pageBackground: '#202124',
    pageTitle: '#fff',

    addNoteContainerBackground: '#25282a',
    addNoteContainerBorder: '1px solid #2f3235',
    addNoteInputBorder: '1px solid #2f3235',
    addNoteInputTextColor: '#fff',
    addNoteInputShadow: '0 0 1rem 0 #2f3235',

    noteBackground: '#f8f8f8',
    noteHoverBackground: '#25282a',
    noteBorderStyle: '1px solid #2f3235',

    textFieldFocusBackground: '#2f3235',

    buttonBackground: 'blueViolet',
    buttonText: 'white'
};

export {
    lightTheme,
    darkTheme
};
