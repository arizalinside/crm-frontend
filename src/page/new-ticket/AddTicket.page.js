import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { shortText } from "../../utils/validation";

export const AddTicket = () => {
  const initialFormData = {
    subject: "",
    issueDate: "",
    detail: ""
  };

  const initialFormDataError = {
    subject: false,
    issueData: false,
    detail: false
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formDataError, setFormDataError] = useState(initialFormDataError);

  useEffect(() => {}, [formData, formDataError]);

  const handleOnChange = e => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleOnSubmit = async e => {
    e.preventDefault();

    setFormDataError(initialFormDataError);

    const isSubjectValid = await shortText(formData.subject);

    setFormDataError({
      ...initialFormDataError,
      subject: !isSubjectValid
    });

    console.log("Form submit request received", formData);
  };

  return (
        <Container>

            <Row>
                <Col>
                <PageBreadcrumb page="New Ticket" />
                </Col>
            </Row>

            <Row>
                <Col>
                <AddTicketForm
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                formData={formData}
                formDataError={formDataError} />
                </Col>
            </Row>

        </Container>
  );
};
