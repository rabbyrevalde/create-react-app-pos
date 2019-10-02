import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalSelect = ({ title }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [qty, setQty] = useState(0);

  const handleChange = e => {
    setQty(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(qty);
  };
  return (
    <div>
      <Button
        className="modal-trigger"
        variant="transparent"
        onClick={handleShow}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Enter Quantity <span>{qty}</span>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="e.g. 8"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalSelect;
