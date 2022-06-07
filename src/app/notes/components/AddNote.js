import React, { useState } from 'react';
import styled from 'styled-components';

const AddNoteWrapper = styled.div`
    background: ${ (props) => props.theme.addNoteContainerBackground };
    border: ${ (props) => props.theme.addNoteContainerBorder };
    padding: 8px 16px;
    border-radius: 5px;
    form { 
        display: flex;
        align-items: center;
        width: 100%;
    }
    p {
        margin: 0;
    }
    input {
        background: transparent;
        border: ${ (props) => props.theme.addNoteInputBorder };
        border-radius: 5px;
        color: ${ (props) => props.theme.addNoteInputTextColor };
        padding: 8px;
        margin: 0 8px;
        
        &:focus {
            outline: none;
            box-shadow: ${ (props) => props.theme.addNoteInputShadow };
        }
    }
    button {
        padding: 8px 16px;
        border:0;
        background-color: ${ (props) => props.theme.buttonBackground };
        border-radius: 5px;
        color: ${ (props) => props.theme.buttonText };
        cursor: pointer;
    }
    @media screen and (max-width: 451px) {
        form {
            flex-direction: column;
            align-items: flex-start;
        }
        p, input, button {
            width: 100%;
            margin: 0 0 8px;
        }
    }
`;

const StyledAddNote = (props) => {
    const [note, setNote] = useState('');

    /**
     * Update input value
     * @param e
     */
    const handleInputChange = (e) => setNote(e.target.value);

    /**
     * Submit input value / new note
     * @param e
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (note) {
            props.handleAddNote(note);
            setNote('');
        }
    };

    return (
        <AddNoteWrapper>
            <form onSubmit={handleSubmit}>
                <p>Add New Note:</p>
                <input type="text" placeholder="Enter text here" value={note} onChange={handleInputChange}/>
                <button type="submit" disabled={!note}>Add</button>
            </form>
        </AddNoteWrapper>
    );
};

export default StyledAddNote;
