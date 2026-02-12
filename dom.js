// // examine the document object model// 
// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL); // page url
// console.log(document.title); // title of the page
// // document.title = "New Title";
// console.log(document.doctype); // html version
// console.log(document.head); // head section
// console.log(document.body); // body section
// console.log(document.all); // all elements in document
// // document.all[10].textContent = "Hello"; // change text of element
// console.log(document.forms); // all forms in document
// console.log(document.links); // all links in document
// console.log(document.images); // all images in document

// // get element by id
// // console.log(document.getElementById("header-title")); dot is an accesser for property and method in an object
// var headerTitle = document.getElementById("header-title");
// var mainHeader = document.getElementById("main-header");

// console.log(headerTitle);
// // headerTitle.textContent = "Hello"; // change text of element
// // headerTitle.innerText = "Goodbye"; // change text of element
// // console.log(headerTitle.textContent); // get text of  element (pays attention to style)
// // headerTitle.innerHTML = "<h3>Hello</h3>"; // change html of element
// mainHeader.style.borderBottom = "solid 3px #000"; // change style of element (main header)

// GETELEMENTSBYCLASSNAME
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[2]); // for specific item 2
// items[2].textContent = "Hello 3"; // change text of item 2
// items[2].style.fontWeight = "bold"; // change style of item 2
// items[2].style.backgroundColor = "yellow"; // change style of item 2

// // gives error
// // items.style.backgroundColor = "#f4f4f4"; // change style of all items (doesn't work because items is a collection)
    
// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = "#f4f4f4"; // change style of all items
// }

// getemelementsbytagname
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]); // for specific item 1 by its index
// li[0].textContent = "Hello 1"; // change text of item 0
// li[0].style.fontWeight = "bold"; // change style of item 0
// li[0].style.backgroundColor = "yellow"; // change style of item 0

// // gives error
// // li.style.backgroundColor = "#f4f4f4"; // change style of all items (doesn't work because li is a collection)

// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = "#f4f4f4"; // change style of all items
// }

// querySelector
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";
// var input = document.querySelector("input");
// input.value = "Hello World"; // change value of input

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"; // change value of submit button to send 

// var item = document.querySelector(".list-group-item");
// item.style.color = "red"; // change color of first item

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue"; // change color of last item

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "green"; // change color of second item

// querySelectorall
// var titles = document.querySelectorAll(".title");

// console.log(titles);
// titles[0].textContent = "Hello"; // change text of first title

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");

// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = "#f4f4f4"; // change background color of odd items
//     even[i].style.backgroundColor = "#ccc"; // change background color of even items
// }


// var itemList = document.querySelector("#items");
// // parrentnode
// console.log(itemList.parentNode); // get parent node of itemList
// itemList.parentNode.style.backgroundColor = "#f4f4f4"; // change background color of parent node
// console.log(itemList.parentElement.parentElement.parentElement); 

// // childnodes
// console.log(ItemList.childNodes); // get child nodes of itemList (includes text nodes)

// 

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow"; // change background color of second child

