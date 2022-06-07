import React, {useEffect, useState} from 'react';
import {useDebounce} from '../../utils/Hooks';
import styled from 'styled-components';

const Note = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${ (props) => `${ props.theme.space[3] }px` };
    font-size: ${ (props) => `${ props.theme.fontSizes.gamma }px` };
    border-bottom: ${ (props) => props.theme.noteBorderStyle };
    cursor: pointer;
    input {
        width: 100%;
        background: transparent;
        border: none;
        margin-right: ${ (props) => `${ props.theme.space[2] }px` };
        font-size: ${ (props) => `${ props.theme.fontSizes.gamma }px` };
        color: ${ (props) => props.theme.pageFontColor };
        
        &:focus {
            outline: none;
            background-color: ${ (props) => props.theme.textFieldFocusBackground };
        }
    }
    &:hover {
        background: ${ (props) => props.theme.noteHoverBackground };
    }
`;

const StyledNote = (props) => {
    const [note, setNote] = useState(props.note.text);

    const debouncedNote = useDebounce(note, 1000);

    useEffect(() => {
        // Evaluate debouncedNote. If it is valid note text, save the updated note
        if (debouncedNote) {
            const newNote = {
                ...props.note,
                text: debouncedNote
            };
            props.handleUpdateNote(newNote);
        }
    }, [debouncedNote]);

    /**
     * Update input value
     * @param e
     */
    const handleInputChange = (e) => setNote(e.target.value);

    /**
     * Reset to old value if the current value is invalid
     * @param e
     */
    const handleInputBlur = (e) => {
        if (!e.target.value) {
            setNote(props.note.text);
        }
    };

    const handleDelete = () => props.handleDeleteNote(props.note.id);

    return (
        <Note>
            <input value={note} onChange={handleInputChange} onBlur={handleInputBlur}/>
            <a onClick={handleDelete}>x</a>
        </Note>
    );
};

export default StyledNote;
