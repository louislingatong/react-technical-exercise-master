import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    ${(props) => `color: ${ props.theme.pageTitle };`}
    ${(props) => `padding: ${ props.theme.space[2] }px 0;`}
    ${(props) => `font-size: ${ props.theme.fontSizes.alpha }px;`}
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
