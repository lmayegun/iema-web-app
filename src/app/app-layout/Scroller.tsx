import React, {useEffect, createRef} from 'react'
import {Container} from 'react-bootstrap';

interface IProps {
  children: React.ReactNode;
  getScrollTop: (scrollTop: number) => void;
}

const Scroller: React.FC<IProps> = ({children, getScrollTop})=>{

  const scroller = createRef<HTMLDivElement>();

  useEffect(()=>{
    scroller.current?.scrollTo(0, 0)
  }); 

  const handleScroll = (e: React.UIEvent<HTMLElement>): void => {
    e.stopPropagation() // Handy if you want to prevent event bubbling to scrollable parent
    // console.log({
    //   event: e,
    //   target: e.target, // Note 1* scrollTop is undefined on e.target
    //   currentTarget: e.currentTarget,
    //   scrollTop: e.currentTarget.scrollTop,
    //   scroll: e.currentTarget.scrollTo,
    // });

    const { scrollTop } = e.currentTarget;
    getScrollTop(scrollTop);
  };

  return(
    <div
      className="scroll-div"
      onScroll={handleScroll}
      ref={scroller}
    >
      <Container bsPrefix={`container page-wrapper`}>
        {children}
      </Container>
    </div>
  );
};

export default Scroller;