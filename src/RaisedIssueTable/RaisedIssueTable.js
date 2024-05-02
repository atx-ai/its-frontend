import React, { useEffect, useState } from "react";
import GenericTable from "../GenericTable/GenericTable";
import axios from "axios";

const RaisedIssueTable = () => {
  const [issuesList, setIssuesList] = useState([]);

  const headers = [
    {
      key: "fieldName",
      header: "Field Name",
    },
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
  ];

  useEffect(() => {
    getIssuesList();
  }, []);

  const getIssuesList = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?q=10")
      .then(function (response) {
        setIssuesList(response.data); // Update state with fetched data
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Format rows data based on fetched issuesList
  const formattedRows = issuesList.map((item) => ({
    fieldName: item.title,
    createdBy: item.body,
    issueId: item.id,
    issueDesc: item.id,
    category: item.id,
    state: item.id,
    priority: item.id,
    tags: item.id,
    eta: item.id,
    assignedTo: item.id,
    createdOn: item.id,
  }));

  return (  
    <div>
      <h3>Raised Issues</h3>
      <GenericTable rows={formattedRows} headers={headers} />
    </div>
  );
};

export default RaisedIssueTable;
