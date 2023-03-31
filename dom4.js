//QuerySelectorALL//
var Items = document.querySelectorAll('.list-group-item');
console.log(Items);


Items[1].style.color = "green";

var odd= document.querySelectorAll('li:nth-child(odd)');
for(i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor= 'green';
}