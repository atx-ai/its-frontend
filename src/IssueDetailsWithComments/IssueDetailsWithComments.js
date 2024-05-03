import React from "react";
import "./IssueDetailsWithComments.scss";

const IssueDetailsWithComments = () => {
  return (
    <div className="issue-details-with-comments">
      <h3>Issue Details With Comments</h3>
      <div className="issue-details-box">
        <div className="odd">Computer screen damaged issue</div>

        <div className="even">
          Can you please provide your computer serial no.
        </div>

        <div className="odd">Serial number is: AKL526268K</div>
      </div>
    </div>
  );
};

export default IssueDetailsWithComments;
