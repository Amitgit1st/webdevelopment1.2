console.log(document.title);
document.title = "xyz";
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 5px #000'

//GET ELEMENT  BY CLASS NAME //
var items= document.getElementsByClassName('title');
console.log(items[0]);
items[0].textContent='ADD ITEM';
items[0].style.fontWeight = 'bold';
items[0].style.color = 'green';
