import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Clock = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
`;

const StyledClock = () => {
    const [currentDateTime, setCurrentDateTime] = useState(moment());

    useEffect(() => {
        // update currentDateTime every second
        setTimeout(() => {
            const now = moment();
            setCurrentDateTime(now);
        }, 1000);
    }, [currentDateTime]);

    return (
        <Clock>
            <span>{currentDateTime.format('DD MMM YYYY HH:mm:ss')}</span>
        </Clock>
    );
};

export default StyledClock;
