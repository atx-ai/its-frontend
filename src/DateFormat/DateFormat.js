import React from "react";

export const getDateFormat = (props) => {

  // Create a new Date object with the passing string
  var date = new Date(props);

  // Extract date components
  var day = date.getDate();
  var month = date.getMonth() + 1; // January is 0
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes();

  // Pad single digit day, month, hours, and minutes with a leading zero if needed
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // Format the date string
  var formattedDate =
    day + "/" + month + "/" + year + " " + hours + ":" + minutes;

  return formattedDate;
};
