import React, { useEffect, useState } from "react";
import GenericTable from "../GenericTable/GenericTable";
import axios from "axios";

const RaisedIssueTable = () => {
  const [issuesList, setIssuesList] = useState([]);

  const tableData = [
    {
      id: 1,
      fieldName: "Monitor",
      createdBy: "Dooj",
      issueId: "d-78162",
      issueDesc: "Monitor black dot",
      category: "Computer",
      state: "Chhattisgarh",
      priority: "P2",
      tags: "-",
      eta: "-",
      assignedTo: "-",
      createdOn: "01-05-2024",
    },
    {
      id: 2,
      fieldName: "Laptop motherboard",
      createdBy: "Vishal",
      issueId: "d-009283",
      issueDesc: "Laptop issue",
      category: "Laptop",
      state: "MP",
      priority: "P3",
      tags: "-",
      eta: "-",
      assignedTo: "-",
      createdOn: "01-05-2024",
    },
  ];

  const headers = [
    {
      // `key` is the name of the field on the row object itself for the header
      key: "fieldName",
      // `header` will be the name you want rendered in the Table Header
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



  const getIssuesList = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        setIssuesList(tableData);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  useEffect(() => {
    getIssuesList();
  }, []);

  return (
    <div>
      <h3>Raised Issues</h3>
      <GenericTable rows={issuesList} headers={headers} />
    </div>
  );
};

export default RaisedIssueTable;
