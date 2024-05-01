import './App.scss';
import RaisingIssueForm from './Forms/RaisingIssueForm/RaisingIssueForm';
import RaisedIssueTable from './RaisedIssueTable/RaisedIssueTable';

function App() {
  return (
    <div className="App">
       <RaisedIssueTable />
       <RaisingIssueForm />
    </div>
  );
}

export default App;
