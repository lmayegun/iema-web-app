import React from 'react';
import styled from 'styled-components';

interface TitleListProps {
    contents?: {}
    width?: number
}

interface Wrapper{
    width: string
  };

const TitleList: React.FC<TitleListProps> = ({width})=>{
    return(
        <div>
            <TitleListStyled width={`${width}%`}>
                <ol className={'custom-ordered-list'}>
                    <li>
                        <a href="/">Natural intelligence</a>
                    </li> 
                    <li>
                        <a href="/">Staying in the loop</a>
                    </li>
                    <li>
                        <a href="/">Running on empty</a>
                    </li>
                    <li>
                        <a href="/">Distance Learning</a>
                    </li>
                    <li>
                        <a href="/">Investment of £5bn could unlock £100bn green recovery, study finds</a>
                    </li>    
                    <li>
                        <a href="/">Quarter of UK's native mammals now at risk of extinction</a>
                    </li>    
                </ol>
            </TitleListStyled>
        </div>
    );
};

const TitleListStyled = styled.div<Wrapper>`
    .custom-ordered-list {
        counter-reset: li;
        margin-left: 0;
        padding-left: 0;
        &>li {
            width:${props => props.width };
            float:left;
            position: relative;
            margin: 0 0 20px 3em;
            padding: 12px 8px 20px;
            list-style: none;
            font: 16px 'MuseoSlab-700',Helvetica,Arial,sans-serif;
            color: #ea7600;
            &:before {
                content: counter(li);
                counter-increment: li;
                position: absolute;
                top: -6px;
                left: -1em;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                width: 1em;
                margin-right: 8px;
                padding: 4px;
                text-align: center;
                font: 4em 'MuseoSlab-300',Helvetica,Arial,sans-serif;
            }
        }
    }
`;

export default TitleList;
