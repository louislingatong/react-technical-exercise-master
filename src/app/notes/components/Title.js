import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    color: ${ (props) => props.theme.pageTitle };
    padding: ${ (props) => `${ props.theme.space[2] }px 0` };
    font-size: ${ (props) => `${ props.theme.fontSizes.alpha }px` };
    font-weight: 800;
    line-height: 1;
`;

const StyledTitle = (props) => {
    return (
        <Title>
            {props.children}
        </Title>
    );
};

export default StyledTitle;
