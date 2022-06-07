import React, { useEffect } from 'react';
import Note from './Note';
import AddNote from './AddNote';
import ThemeToggle from './ThemeToggle';
import Title from './Title';
import Clock from './Clock';
import styled from 'styled-components';

const Notes = styled.div`
    color: ${ (props) => props.theme.pageFontColor };
    background: ${ (props) =>  props.theme.pageBackground };
    min-height: 100%;
    padding: 20px;
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    -webkit-transition: background 0.5s ease-out;
    -moz-transition: background 0.5s ease-out;
    -o-transition: background 0.5s ease-out;
    transition: background 0.5s ease-out;
`;

const StyledNotes = (props) => {
    useEffect(() => {
        props.loadNotes();
    }, []);

    return (
        <Notes>
            <Clock/>
            <header>
                <Title>Notes</Title>
                <ThemeToggle handleChangeTheme={props.handleChangeTheme} darkTheme={props.darkTheme}/>
            </header>
            <AddNote handleAddNote={props.addNote}/>
            {
                Object.values(props.notes).length
                    ? Object.values(props.notes).map((note) => {
                        return (
                            <Note
                              key={note.id}
                              note={note}
                              handleUpdateNote={props.updateNote}
                              handleDeleteNote={props.deleteNote}
                            />
                        );
                    })
                    : <>No available notes</>

            }
        </Notes>
    );
};

export default StyledNotes;
