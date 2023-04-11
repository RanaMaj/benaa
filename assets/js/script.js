var maxLength = 83;
var myParagraph = document.getElementById("myParagraph");
var text = myParagraph.textContent;

if (text.length > maxLength) {
  var shortenedText = text.substring(0, maxLength) + "...";
  myParagraph.textContent = shortenedText;
}

// --------------------------------------------
var maxLength = 83;
var myParagraph2 = document.getElementById("myParagraph2");
var text = myParagraph2.textContent;

if (text.length > maxLength) {
  var shortenedText = text.substring(0, maxLength) + "...";
  myParagraph2.textContent = shortenedText;
}

// --------------------------------------------
var maxLength = 83;
var myParagraph3 = document.getElementById("myParagraph3");
var text = myParagraph3.textContent;

if (text.length > maxLength) {
  var shortenedText = text.substring(0, maxLength) + "...";
  myParagraph3.textContent = shortenedText;
}

// console.log("Number of characters in <h3>: " + text.length);
