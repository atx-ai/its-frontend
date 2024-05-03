import React, { useEffect, useState } from "react";
import GenericTable from "../GenericTable/GenericTable";
import axios from "axios";
import RaisingIssueForm from "../Forms/RaisingIssueForm/RaisingIssueForm";
import "./RaisedIssueTable.scss";
import { MisuseOutline, WhitePaper } from "@carbon/icons-react";
import { Link } from "react-router-dom";
import { getDateFormat } from "../DateFormat/DateFormat";

const RaisedIssueTable = () => {
  const [issuesList, setIssuesList] = useState([]);
  const [createIssueForm, setCreateIssueForm] = useState(false);
  const headers = [
    // {
    //   key: "fieldName",
    //   header: "Field Name",
    // },
    {
      key: "createdBy",
      header: "Created By",
    },
    {
      key: "issueId",
      header: "Issue ID",
    },
    {
      key: "issueDesc",
      header: "Issue Desc",
    },
    {
      key: "category",
      header: "Category",
    },
    {
      key: "state",
      header: "State",
    },
    {
      key: "priority",
      header: "Priority",
    },
    {
      key: "tags",
      header: "Tags",
    },
    {
      key: "eta",
      header: "ETA",
    },
    {
      key: "assignedTo",
      header: "Assigned To",
    },
    {
      key: "createdOn",
      header: "Created On",
    },
    {
      key: "updatedOn",
      header: "Updated On",
    },
  ];

  useEffect(() => {
    getIssuesList();
  }, []);

  const getIssuesList = () => {
    axios
      .get("http://localhost:8080/issues/")
      .then(function (response) {
        setIssuesList(response.data); // Update state with fetched data
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Format rows data based on fetched issuesList
  const formattedRows = issuesList.map((item, key) => ({
    id: key,
    // fieldName: item.title,
    createdBy: <Link to={`issueProgress`}>{item.created_by}</Link>,
    issueId: item.issue_id,
    issueDesc: item.issue_description,
    category: item.category,
    state: item.state,
    priority: item.priority,
    tags: item.tags,
    eta: getDateFormat(item.eta),
    assignedTo: item.assigned_to,
    createdOn: getDateFormat(item.created_on),
    updatedOn: getDateFormat(item.updated_on),
  }));

  return (
    <div className="raised-issues-table">
      {/* Create Issue Form */}
      <div
        className="openForm"
        onClick={() => setCreateIssueForm(!createIssueForm)}
      >
        {createIssueForm ? <MisuseOutline /> : <WhitePaper />}
      </div>
      <h3>Raised Issues</h3>
      <GenericTable rows={formattedRows} headers={headers} />

      {createIssueForm && <RaisingIssueForm />}
    </div>
  );
};

export default RaisedIssueTable;
