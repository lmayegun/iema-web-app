import React from 'react';
import styled from 'styled-components'; 

interface DateProps {
    className?: string;
}

const Date: React.FC<DateProps> = (props)=>{
    return(
        <span className={`${props.className} date-text`}>
            30 July 2020
        </span>
    );
};

const DateStyled = styled(Date)`
    font: 12px 'MuseoSans-700',Helvetica,Arial,sans-serif;
    color: #474747;
`;

export default DateStyled;