import React from 'react';
import {Col} from 'react-bootstrap';
import styled from 'styled-components';

import Tags from './Tags';
import Date from './Date';

interface CenterThumbTeaserProps {
    className?: string;
    overlapContent: boolean;
}

const CenterThumbTeaser: React.FC<CenterThumbTeaserProps> = ({className, overlapContent})=>{

    const size = overlapContent ? 'large' : 'normal';

    return(
        <div className={className}>
            <Col sm={12}>
                <div className={`thumbnail ${size}`}>
                    <div className={`thumbnail-image promoted`}>
                        <a href='/'>
                            <img 
                                src={'https://transform.iema.net/sites/default/files/s3/hero/web_p26-28_natrual-intelligence_shutterstock-551809147.png'} 
                                alt={'center-thumbs'}
                                className={'img-responsive'}
                            />
                        </a>
                    </div>
                    { overlapContent && (
                        <div className={'thumbnail-content text-center'}>
                            <strong>Ediror's Pick</strong>
                            <h3>
                                <a href='/'>Natural intelligence</a>
                            </h3>
                            <div className={'type-text-wrapper'}>
                                <Tags />
                                <Date />
                            </div>
                        </div>
                    )}
                    { overlapContent === false && (
                        <div className={'thumbnail-content'}>
                            <h3>
                                <a href='/'>RRC Launch New Courses: IEMA Sustainability Skills for the Workforce & Managers</a>
                            </h3>
                            <div className={'type-text-wrapper'}>
                                <Tags />
                            </div>
                            <div className={'date-text-wrapper'}>
                                <Date />
                            </div>
                        </div>
                    )}
                </div>
            </Col>
        </div>
    );
};

const CenterThumbTeaserStyled = styled(CenterThumbTeaser)`
    .thumbnail{
        &.large {
            margin-bottom: 40px;
            .thumbnail-content {
                position: absolute;
                bottom: 0;
                background: #FFF;
                width: 70%;
                left: 15%;
                right: 15%;
                padding: 20px 20px 10px;
                strong {
                    font: 24px 'MuseoSlab-700',Helvetica,Arial,sans-serif;
                    padding: 11px 25px;
                }
                h3 {
                    font: 18px 'MuseoSlab-700',Helvetica,Arial,sans-serif;
                    margin-bottom: 15px;
                    border-bottom: 0;
                    min-height: auto;
                }
            }
        }

        &.normal {
            margin-bottom: 40px;
            .thumbnail-content {
                strong {
                    font: 24px 'MuseoSlab-700',Helvetica,Arial,sans-serif;
                    padding: 11px 25px;
                }
                h3 {
                    font: 24px 'MuseoSlab-700',Helvetica,Arial,sans-serif;
                    min-height: 75px;
                    border-bottom: 2px solid #000;
                }
            }
        }

        .thumbnail-image{
            position: relative;
            margin-bottom: 20px;
            overflow: hidden;  
            img {
                max-width: 100%;
                transition: all .4s;
                &:hover {
                    -moz-transform: scale(1.2);
                    -webkit-transform: scale(1.2);
                    transform: scale(1.2);
                }
            }
            &.promoted:after {
                content: " ";
                background: url(https://transform.iema.net/sites/default/themes/custom/transform/img/promoted.png) no-repeat 0 0;
                position: absolute;
                left: 0;
                top: 0;
                height: 70px;
                width: 70px;
            }
        }
    }
`;



export default CenterThumbTeaserStyled;