import React from "react";
import "./App.css";
// import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./page/dashboard/Dashboard.page";
import { AddTicket } from "./page/new-ticket/AddTicket.page";
import { TicketLists } from "./page/ticket-list/TicketLists.page";
import { Ticket } from "./page/ticket/Ticket.page";
import { Entry } from "./page/entry/Entry.page";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";

function App () {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/add-ticket">
              <AddTicket />
            </PrivateRoute>
            <PrivateRoute path="/tickets">
              <TicketLists />
            </PrivateRoute>
            <PrivateRoute path="/ticket/:tId">
              <Ticket />
            </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
