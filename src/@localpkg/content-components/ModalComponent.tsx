import React from 'react';
import {Modal, Button} from 'react-bootstrap'
import styled from 'styled-components';  

interface ModalComponentProps{
  show: boolean;
  handleClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({children, show, handleClose})=>{
  return(
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
      </Modal>
  );
};

export default ModalComponent;