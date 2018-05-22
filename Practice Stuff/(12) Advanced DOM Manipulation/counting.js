// counts the total number of events on https://developer.mozilla.org/en-US/docs/Web/Events
var events = document.querySelectorAll("tr");
var header = document.querySelectorAll("table");

// Have to subtract the total number of table because events includes the headers of the table 
var total = events.length - header.length;