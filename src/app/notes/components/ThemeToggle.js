import React from 'react';
import styled from 'styled-components';

const ThemeToggle = styled.div`
    label {
        margin-left: ${ (props) => `${ props.theme.space[2] }px` };
        position: relative;
        display: inline-block;
        width: 50px;
        height: 28px;
        
        > input { 
            opacity: 0;
            width: 0;
            height: 0;
        }
    }
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: ${ (props) => props.theme.buttonBackground };
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
    }
    
    .slider.round {
        border-radius: 34px;
    }
    
    .slider.round:before {
        border-radius: 50%;
    }
`;

const StyledThemeToggle = (props) => {
    const handleInputChange = (e) => props.handleChangeTheme(e.target.checked);

    return (
        <ThemeToggle>
            Dark Mode:
            <label>
                <input type="checkbox" checked={props.darkTheme} onChange={handleInputChange}/>
                <span className="slider round" />
            </label>
        </ThemeToggle>
    );
};

export default StyledThemeToggle;
