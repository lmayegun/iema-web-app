import React from 'react'; 
import styled from 'styled-components';

interface TagsProps {
    className?: string;
}

const Tags: React.FC<TagsProps> = ({className})=>{
    return(
        <TagsStyled>
            <span className={`${className} type-text`}>
                <a href="/">
                    Biodiversity 
                </a>|
                <a href="/">
                    Biodiversity 
                </a>|
                <a href="/">
                    Wildlife & Habitats 
                </a>|
            </span>
        </TagsStyled>
    );
};

const TagsStyled = styled.span`
    font: 12px 'MuseoSans-700',Helvetica,Arial,sans-serif;
    color: #474747;
`;
export default Tags;