
document.addEventListener('DOMContentLoaded', function(){
let h1 = document.createElement('h1');
let text = document.createTextNode('This is an h1');
let div = document.createElement('div');
div.className = 'header-container';
h1.appendChild(text);
h1.appendChild(div);
document.body.appendChild(h1);
document.body.appendChild(div);
let h2 = document.createElement('h2');
let h2Text = document.createTextNode('This is an h2');
h2.appendChild(h2Text);
h2.appendChild(div);
document.body.appendChild(h2);
let h3 = document.createElement('h3');
let h3Text = document.createTextNode('This is an h3');
h3.appendChild(h3Text);
h3.appendChild(div);
document.body.appendChild(h3);
let h4 = document.createElement('h4');
let h4Text = document.createTextNode('This is an h4');
h4.appendChild(h4Text);
h4.appendChild(div);
document.body.appendChild(h4);
let h5 = document.createElement('h5');
let h5Text = document.createTextNode('This is an h5');
h5.appendChild(h5Text);
h5.appendChild(div);
document.body.appendChild(h5);
let h6 = document.createElement('h6');
let h6Text = document.createTextNode('This is an h6');
h6.appendChild(h6Text);
h6.appendChild(div);
document.body.appendChild(h6);
h1.className = 'h1';
h2.className = 'h2';
h3.className = 'h3';
h4.className = 'h4';
h5.className = 'h5';
h6.className = 'h6';
let color = ['Green', 'Blue', 'Purple', 'Brown', 'yellowgreen', 'brown', 'yellow', 'babyblue'];

    h1.addEventListener("click", doubleClicked);
    h2.addEventListener("click", doubleClicked);
    h3.addEventListener("click", doubleClicked);
    h4.addEventListener("click", doubleClicked);
    h5.addEventListener("click", doubleClicked);
    h6.addEventListener("click", doubleClicked);
    
    
function doubleClicked($event){
var r = randomTen();
while(r > 7){
    r = randomTen();
}
$event.target.style.color = color[r];
}
function randomTen(){
    return Math.floor(Math.random() * 10);
}

let button = document.createElement('button');
let btnText = document.createTextNode("Click to add new list item");
button.appendChild(btnText);
document.body.appendChild(button);
button.className = 'tappy';

let ul = document.createElement('ul');
var myList = 1;
document.body.appendChild(ul);
button.addEventListener("click", function(){
    let li = document.createElement('li');
    let liText = document.createTextNode('This is list item ' + myList);
    li.appendChild(liText);
    ul.appendChild(li);
     myList++;
     li.addEventListener("click", doubleClicked);
     li.addEventListener("dblclick", removeList);

})
function removeList($event){
    $event.target.remove();
}

})