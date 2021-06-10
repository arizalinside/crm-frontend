/* eslint-disable react/prop-types */
import React from "react";
import { Form, Jumbotron, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add-ticket-form.style.css";

export const AddTicketForm = ({ handleOnSubmit, handleOnChange, formData, formDataError }) => {
  return (
        <Jumbotron className="mt-3 add-new-ticket bg-light">
            <h1 className="text-center text-info">Add New Ticket</h1>
            <hr />
            <Form onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                    <Form.Control
                    // type="email"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleOnChange}
                    // minLength={2}
                    // maxLength={100}
                    required
                    />
                    <Form.Text className="text-danger">
                        {formDataError.subject && "*Subject length minimum 3 characters"}
                    </Form.Text>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Issue Found</Form.Label>
                    <Col sm={9}>
                    <Form.Control
                    type="date"
                    name="issueDate"
                    value={formData.issueDate}
                    onChange={handleOnChange}
                    required
                    />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Description</Form.Label>
                    <Col sm={9}>
                    <Form.Control
                    as = "textarea"
                    name="detail"
                    value={formData.detail}
                    onChange={handleOnChange}
                    required
                    />
                    </Col>
                </Form.Group>

                <Button type="submit" variant="info" block>Login</Button>
            </Form>
        </Jumbotron>
  );
};

AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  formDataError: PropTypes.object.isRequired
};
