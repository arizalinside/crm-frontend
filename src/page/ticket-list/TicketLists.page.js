import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../assets/data/ticket-dummy.json";
import { Link } from "react-router-dom";

export const TicketLists = () => {
  const [str, setStr] = useState("");
  const [DispTicket, setDispTicket] = useState(tickets);

  useEffect(() => {}, [str, DispTicket]);

  const handleOnChange = e => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {
    const displayTickets = tickets.filter(row =>
      row.subjects.toLowerCase().includes(sttr.toLowerCase())
    );

    setDispTicket(displayTickets);
  };

  return (
        <div>
            <Container>

                <Row>
                    <Col>
                        <PageBreadcrumb page="Ticket List" />
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col>
                        <Link to='/add-ticket'>
                            <Button variant="info">Add New Ticket</Button>
                        </Link>
                    </Col>
                    <Col className="text-right">
                        <SearchForm handleOnChange={handleOnChange} str={str} />
                    </Col>
                </Row>

                <hr />

                <Row>
                    <Col>
                        <TicketTable tickets={DispTicket} />
                    </Col>
                </Row>

            </Container>
        </div>
  );
};
