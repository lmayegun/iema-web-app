import React, { JSXElementConstructor } from 'react';
import {Modal, Button} from 'react-bootstrap'
import styled from 'styled-components';  

interface ModalComponentProps{
  show: boolean;
  handleClose: () => void;
  dialogClass?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const ModalComponent: React.FC<ModalComponentProps> = ({children, show, handleClose, dialogClass, header, footer})=>{
  return(
      <Modal 
        show={show} 
        onHide={handleClose}
        dialogClassName={dialogClass}
      >
          <Modal.Header closeButton>
            <Modal.Title>{header}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            {footer}
          </Modal.Footer>
      </Modal>
  );
};

export default ModalComponent;