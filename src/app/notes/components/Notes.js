import React, { useEffect } from 'react';
import Note from './Note';
import Title from './Title';
import styled from 'styled-components';

const Notes = styled.div`
    ${(props) => `background: ${ props.theme.pageBackground };`}
    min-height: 100%;
    padding: 20px;
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #themeToggle {
        border: 0;
        padding: 8px 16px;
        font-size: 12px;
    }
    > #addNoteWrapper {
        display: flex;
        align-items: center;
        background: rgba(0,0,0,0.05);
        padding: 8px 16px;
        border-radius: 5px;
        label {
            color: ${(props) => props.theme.label};
        }
        input {
            background: ${(props) => props.theme.textFieldBackground};
            border: ${(props) => props.theme.textFieldBorderStyle};
            padding: 8px;
            margin: 0 16px;
            &:focus {
                background: ${(props) => props.theme.textFieldFocusBackground};
            }
        }
        button {
            padding: 8px 16px;
            border:0;
            background-color: ${(props) => props.theme.buttonBackground};
            color: ${(props) => props.theme.buttonText};
        }
    }
`;

const StyledNotes = (props) => {
    useEffect(() => {
        props.loadNotes();
    }, []);

    return (
        <Notes>
            <header>
                <Title>Notes</Title>
                <button id="themeToggle">Toggle theme</button>
            </header>
            <div id="addNoteWrapper">
                <label>Add another:</label><input type="text" placeholder="text for new note" /><button>Add</button>
            </div>
            {
                Object.values(props.notes).map((note, i) => {
                    return (
                        <Note
                          key={i}
                          note={note}
                        />
                    );
                })
            }
        </Notes>
    );
};

export default StyledNotes;
