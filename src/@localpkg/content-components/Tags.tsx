import React from 'react'; 
import styled from 'styled-components';
import {Link} from 'react-router-dom';

interface TagsProps {
    className?: string;
    tags?: []
}

const Tags: React.FC<TagsProps> = ({className, tags})=>{
    if(!tags){
        return(
            <p> no Tags</p>
        );
    }
    const lastIndex =  tags.length - 1;
    return(
        <TagsStyled>
            <span className={`${className} type-text`}>
                {   
                    tags.map(( tag: string, index: number)=>{
                        return(
                            <>
                                <Link to='/' key={index}> {tag} </Link>  
                                {index !== lastIndex && <>|</>}
                            </>
                        );
                    })
                }
            </span>
        </TagsStyled>
    );
};

const TagsStyled = styled.span`
    .type-text{
        font: 12px 'MuseoSans-700',Helvetica,Arial,sans-serif;
        color: #474747;
        font-weight: 500;
    }
    text-transform: capitalize;
`;
export default Tags;