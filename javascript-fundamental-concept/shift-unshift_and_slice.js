var ticketLine = ["Salam", "Kalam", "Balam", "Jalam", "Nilam"];

ticketLine.shift();
console.log(ticketLine);


ticketLine.unshift("sagor");
console.log(ticketLine);


var part = ticketLine.slice(1, 3);
console.log(part);