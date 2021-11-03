// Strict mode
"use strict";
// showHide() function
// (showing and hidding answers while clicking on the questions)
const showHide = (answerID, arrowID, askID) => {
  const element = document.getElementById(answerID);
  const arrow = document.getElementById(arrowID);
  const ask = document.getElementById(askID);
  if (element.style.display === "block") {
    ask.style.fontWeight = "unset";
    element.style.display = "none";
    arrow.style.transform = "rotate(0.5turn)";
  } else {
    ask.style.fontWeight = "bold";
    element.style.display = "block";
    arrow.style.transform = "rotate(1turn)";
  }
};
