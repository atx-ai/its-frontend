import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import RaisingIssueForm from "./Forms/RaisingIssueForm/RaisingIssueForm";
import RaisedIssueTable from "./RaisedIssueTable/RaisedIssueTable";
import TopMenu from "./Menu/TopMenu";
import IssueDetailsWithComments from "./IssueDetailsWithComments/IssueDetailsWithComments";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopMenu />}>
            <Route index element={<RaisedIssueTable />} />
            <Route path="createIssue" element={<RaisingIssueForm />} />
            <Route
              path="issueProgress"
              element={<IssueDetailsWithComments />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
