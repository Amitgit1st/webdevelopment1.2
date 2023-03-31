console.log(document.title);
document.title = "xyz";
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 5px #000'

//GET ELEMENT  BY CLASS NAME //
var items= document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor = 'green';   // 'C' of color must be in capital letter
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight = 'bold';
}
