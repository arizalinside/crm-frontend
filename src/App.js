import React from "react";
import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
// import { Dashboard } from "./page/dashboard/Dashboard.page";
// import { AddTicket } from "./page/new-ticket/AddTicket.page";
import { TicketLists } from "./page/ticket-list/TicketLists.page";
// import { Entry } from "./page/entry/Entry.page";

function App () {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        <TicketLists />
      </DefaultLayout>
    </div>
  );
}

export default App;
