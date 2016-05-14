$(document).ready(function() {
  $(".logotype").lettering('words');
});


// Random Quote

var quote0 = '"I never worry about the future, it comes soon enough."';
var quote1 = '"One who makes no mistakes makes nothing at all."';
var quote2 = '"Do one thing everyday that scares you."';
var quote3 = '"In the end it’s not the years in your life that count, it’s the life in your years."';
var quote4 = '"Above all, try something."'

var numRand;
var max = 5;

numRand = Math.floor(Math.random() * max);

// Display Quote
$('.quote').text( eval('quote' + numRand));

// Change in Source to match random quote
if (quote0) {
  $('.source').text(" Albert Einstein") 
}
if (quote1) {
  $('.source').text("Giacomo Casanova") 
}
if (quote2) {
  $('.source').text("Eleanor Roosevelt")
}
if (quote3) {
  $('.source').text("Abraham Lincoln")
}
if (quote4) {
  $('.source').text("Franklin D. Roosevelt")
}

// Add Hyphen
$('.source').prepend("&#45;" + "  ")