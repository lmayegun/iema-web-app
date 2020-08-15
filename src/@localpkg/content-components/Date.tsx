import React from 'react';
import styled from 'styled-components'; 

interface DateProps {
    date?: string;
    className?: string;
}

const Date: React.FC<DateProps> = ({className, date})=>{
    if(!date){
        return <p> No date </p>
    }
    return(
        <p className={`${className} date-text`}>
            {date}
        </p>
    );
};

const DateStyled = styled(Date)`
    font: 12px 'MuseoSans-700',Helvetica,Arial,sans-serif;
    color: #474747;
`;

export default DateStyled;