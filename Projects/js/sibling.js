// Pg 229, 231


// Select the starting point and find its siblings.
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;
var ul = document.getElementsByTagName('ul');

// Change the values of the siblings' class attributes.
prevItem.setAttribute('class', 'complete');
nextItem.className = 'cool';
//prevItem.removeAttribute('class');
if(prevItem.hasAttribute('class')){
  document.write(prevItem.getAttribute('class'));
}

document.write(ul[0].lastChild.firstChild.nodeValue);
// innerHTML, textContent, innerText

// Store the first list item in a variable
var firstItem = document.getElementById('one');

// Get the content of the first list item
var itemContent = firstItem.innerHTML;

// Update the content of the first list item so it is a link
firstItem.innerHTML = '<a href="http://example.org">' + itemContent + '</a>';

var new1 = document.createElement('li');
var new2 = document.createTextNode('qunt');
new1.appendChild(new2);
var list2 = document.getElementsByTagName('ul')[0];
list2.appendChild(new1);


var toRemove = document.getElementsByTagName('li')[2];
var parent = toRemove.parentNode;
parent.removeChild(toRemove);

// new1 = document.getElementsByTagName('BODY')[0];
// document.write(new1.innerHTML);
// insertBefore(newItem, target);
