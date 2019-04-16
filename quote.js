
// array where all the thoughts are stored
var quotes = ["Be the change that you wish to see in the world.", "Live as if you will die tommorrow, learn as if you were to live forever.","Imperfection is a beauty, madness is genious, and it's better to be absolutely ridiculous than absolutely boring.", "Yesterday is history,tommorrow is a mystery, Today is gift of God, which is why we call it the present."];
// array where authors names were stored
var author = ["Mahatma Gandhi","Mahatma Gandhi","Bil Keane", "Budha"];
// array here div bg colore stored
var quotecolor = ["#F9F0EE", "#C4EEF6", "#CCD3F3","#F2DBF6", "#DBF6DF", "#B9C3C0"];
// array where body's bg pictures url were stored
var bg_pic = ["url('1.jpg')","url('2.jpg')","url('3.jpg')","url('4.jpg')","url('5.jpg')","url('6.jpg')","url('7.jpg')"];



// In the para id index [0] quotes will write
document.getElementById("para").innerHTML = quotes[0];
// In the author id index [0] author will write	 
document.getElementById("author").innerHTML = author[0];

// whenever button will click this worked function will call
function worked() {
var a = Math.floor(Math.random() * quotes.length);  // random function will choose any quote randomly from quotes array and store it in a variable  
	var b = Math.floor(Math.random() * author.length); // randomly choose author name from author array
	var c = Math.floor(Math.random() * quotecolor.length); // randomly choose color for quotes background from quotecolor array
	var d = Math.floor(Math.random() * bg_pic.length);  // randomly choose picture for background of client side from quotecolor array
 

 // display variable a value in para id element
	document.getElementById("para").innerHTML = quotes[a];
 // display variable b value in author id element
 	document.getElementById("author").innerHTML = author[b];
 // display variable c value in box id element
	document.getElementById("box").style.backgroundColor = quotecolor[c];
 // display variable d value in body id element
 	document.getElementById("body").style.backgroundImage = bg_pic[d];



}



















































// // var newquotes = Math.floor(Math.random() * (quotes.length));
// 		// var author_name = Math.floor(Math.random() * (author.length));
// 		// document.getElementById('para').innerHTML = quotes[newquotes];
// 		// document.getElementById('author').innerHTML = author[author_name];
// 		for (var i = 0; i <= quotes.length; i++) {
//  			 // document.write(quotes[i]);
 		
// }