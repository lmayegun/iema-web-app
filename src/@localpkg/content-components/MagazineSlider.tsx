import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import {Container, Col, Row} from 'react-bootstrap';

import {IemaButton} from 'src/@localpkg';

interface MagazineSliderProps {
    magazines?: string;
}

class MagazineSlider extends React.Component<MagazineSliderProps> {

    private constructor(props : MagazineSliderProps){
        super(props);
    };

    render() {
        const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
        <StyledMagazine>
            <div className={"action-btn-wrapper"}>
            <Container>
                <Row>
                    <Col md={{ span: 3, offset: 3 }}><IemaButton title={"SUBSCRIBE"} variant={"pink"}/></Col>
                    <Col md={3}><IemaButton title={"VIEW ALL ISSUES"} variant={"pink"}/></Col>
                </Row>
            </Container>
            </div>
            <Slider {...settings}>
                <div className={"magazine-item"}>
                    <div className={"magazine-title"}>
                        <h3>
                            <a href="/"> July/August 2020</a>
                        </h3>
                    </div>
                    <a href="/">
                        <img 
                            src="https://transform.iema.net/sites/default/files/styles/thumbnail_180x260/public/s3/issue-images/july-t.png?itok=jlitaIQw"
                            alt="img-src"
                            className={'img-responsive'}
                        />
                    </a>
                </div>
                <div className={"magazine-item"}>
                    <div className={"magazine-title"}>
                        <h3>
                            <a href="/"> July/August 2020</a>
                        </h3>
                    </div>
                    <a href="/">
                        <img 
                            src="https://transform.iema.net/sites/default/files/styles/thumbnail_180x260/public/s3/issue-images/july-t.png?itok=jlitaIQw"
                            alt="img-src"
                            className={'img-responsive'}
                        />
                    </a>
                </div>
                <div className={"magazine-item"}>
                    <div className={"magazine-title"}>
                        <h3>
                            <a href="/"> July/August 2020</a>
                        </h3>
                    </div>
                    <a href="/">
                        <img 
                            src="https://transform.iema.net/sites/default/files/styles/thumbnail_180x260/public/s3/issue-images/july-t.png?itok=jlitaIQw"
                            alt="img-src"
                            className={'img-responsive'}
                        />
                    </a>
                </div>
                <div className={"magazine-item"}>
                    <div className={"magazine-title"}>
                        <h3>
                            <a href="/"> July/August 2020</a>
                        </h3>
                    </div>
                    <a href="/">
                        <img 
                            src="https://transform.iema.net/sites/default/files/styles/thumbnail_180x260/public/s3/issue-images/july-t.png?itok=jlitaIQw"
                            alt="img-src"
                            className={'img-responsive'}
                        />
                    </a>
                </div>
                <div className={"magazine-item"}>
                    <div className={"magazine-title"}>
                        <h3>
                            <a href="/"> July/August 2020</a>
                        </h3>
                    </div>
                    <a href="/">
                        <img 
                            src="https://transform.iema.net/sites/default/files/styles/thumbnail_180x260/public/s3/issue-images/july-t.png?itok=jlitaIQw"
                            alt="img-src"
                            className={'img-responsive'}
                        />
                    </a>
                </div>
                <div className={"magazine-item"}>
                    <div className={"magazine-title"}>
                        <h3>
                            <a href="/"> July/August 2020</a>
                        </h3>
                    </div>
                    <a href="/">
                        <img 
                            src="https://transform.iema.net/sites/default/files/styles/thumbnail_180x260/public/s3/issue-images/july-t.png?itok=jlitaIQw"
                            alt="img-src"
                            className={'img-responsive'}
                        />
                    </a>
                </div>
            </Slider>
        </StyledMagazine>
        );
    };
};

const StyledMagazine = styled.div`
    background: #ebebeb;
    padding: 44px 20px 50px;
    position: relative;
    .action-btn-wrapper{
        margin-bottom: 40px;
    }
    .slick-list{
        max-width: 868px;
        margin: auto;
    }
    .slick-slide{
        float: left;
        list-style: none;
        position: relative;
        padding-right: 40px;
        box-sizing: border-box;
    }
    
    .magazine-item {
        .magazine-title {
            padding: 0 0 20px;
            margin-bottom: 30px;
            min-height: 110px;
            border-bottom: 5px solid #9e007e;
            h3{
                text-transform: uppercase;
                text-align: center;
                font: 24px 'MuseoSlab-700',Helvetica,Arial,sans-serif;
            }
        }
    }

    .slick-next {
        right: 12px;
    }

    .slick-next:before, .slick-prev:before {
        font-size: 56px;
        line-height: 1;
        opacity: .75;
        color: #9e007e;
    }
`

export default MagazineSlider; 