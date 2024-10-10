//  Selecting elements using DOM 
//  getElementsById() 
// The getElementsById() method returns an element object that represnts an HTML elelmet
let message = document.getElementById("message")
console.log(message);
let  newMsg = document.getElementById('newMsg')
console.log(newMsg);

// getElementsByName()
let name = document.getElementsByName("firstName")
console.log(name);

// getElementsByTagName()
let head = document.getElementsByTagName("h1")
console.log(head);
let body = document.getElementsByTagName("h2")
console.log(body);

// getElementsByClassName()
let clasname = document.getElementsByClassName("classname")
console.log(clasname);

let col = document.getElementById('col')
console.log(col);
let access = col.getElementsByClassName("classname")
console.log(access);

// querySelector() and querySelectorAll()
// querySelector() method allows you to select the first element that matches one or more css selectors.
let quary = document.querySelector(".quary")
console.log(quary);
let quaryId = document.querySelector("#quaryId")
console.log(quaryId);

let quaryAll = document.querySelectorAll('.quary')
console.log(quaryAll);
let quaryIdAll = document.querySelectorAll('#quaryId')
console.log(quaryIdAll);

// selecting parent elments
let text = document.querySelector(".text")
console.log(text);
console.log(text.parentNode);

// selecting child elments
let parent = document.querySelector(".parent")
console.log(parent);
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);
// console.log(parent.childNode);

let sibling = document.querySelector(".sibling")
console.log(sibling.previousElementSibling);
console.log(sibling.nextElementSibling);

// Manipulating HTML elements
// createElement()
// The document.createElement() accept an HTML name and returns a new node with the element type
let header = document.createElement("h1")
header.innerHTML = "Good Afternoon Devs"
console.log(header);
document.body.appendChild(header)
header.id = "head"
header.className = "heading"
console.log(header);

// appendDhild()
// Use appendDhild() method to add a node to the end of the list of child nodes of a specified parent node
// The appendDhild() can be used to move an existing child node to the position within the document
let menu = document.getElementById("menu")
let newList = document.createElement("li")
newList.innerHTML="Contact"
menu.appendChild(newList)

// textContent
// To get the textContent of a node and its descendants, you use the textContent property
console.log(menu.textContent);
console.log(menu.innerHTML);
// menu.textContent="Hello!!"
// menu.innerHTML="<h1>Hello!</h1>"
// menu.innerText="<h1>Hello!!</h1>"

let test = document.getElementById("test")
test.textContent = "TextContent"

// after()
// we can use after() method to insert one or more node after the element 
// Element.after(newNode)
// menu.after(node1, node1, node1.... nodeN)
// menu.after(str1, str2, str3.... strN)
let newNav = document.createElement('li')
newNav.innerHTML= 'SignUp'
menu.after(newNav)
console.log(menu);

// append()
// parentNode.append(newNode1, newNode2, newNode3.... newNodeN)
// let appEnd = document.createElement("li")
// appEnd.innerHTML = "login"
// menu.append(appEnd)
// console.log(menu);

// prepend()
// parentNode.prepend(newNode1, newNode2, newNode3.... newNodeN)
let appEnd = document.createElement("li")
appEnd.innerHTML = "login"
menu.prepend(appEnd)
console.log(menu);

// insertAdjacentHTML()
// menu.insertAdjacentHTML(positionName, text);
// beforeend, afterend, afterbegin, beforebegin
menu.insertAdjacentHTML("beforebegin", "<li>profile</li>")
menu.insertAdjacentHTML("afterbegin", "<li>work</li>")
menu.insertAdjacentHTML("afterend", "<li>lesson</li>")
console.log(menu);


// replaceChild()
// parentNode.replaceChild(newChild, oldChild);

// cloneNode()
// let newNode = originalNode.cloneNode()
let newNode = menu.cloneNode(true)
newNode.id = "newNode"
console.log(newNode);

// removeChild()
// parentNode.removeChild(childNode)
menu.removeChild(menu.lastElementChild)
menu.removeChild(menu.firstElementChild)
console.log(menu);


// insertBefore()
// parentNode.insertBefore(newNode, existingNode)
let inSert = document.createComment("learn")
// inSert.innerHTML="learn"
menu.insertBefore(inSert, menu.firstElementChild)
console.log(menu);

// attribute
let inputBox = document.getElementById('username')

console.log(inputBox.attributes);

// getAttribute()
console.log(inputBox.getAttribute('id'));
console.log(inputBox.getAttribute('type'));
console.log(inputBox.getAttribute('placeholder'));

// setAttribute()
// inputBox.setAttribute("name", "value")
inputBox.setAttribute("class", "user")
console.log(inputBox);

// hasAttribute() 
// inputBox.hasAttribute("AttributeName")
console.log(inputBox.hasAttribute("class"));
console.log(inputBox.hasAttribute("name"));

// removeAttribute()
// inputBox.removeAttribute("AttributeName")
inputBox.removeAttribute("id")
console.log(inputBox);

// style property
let gender = document.getElementById("gender")
console.log(gender.style);
gender.style.backgroundColor = "blue"
gender.style.fontSize = "20px"

let submit = document.getElementById("submit")
let thank = document.getElementById("thank")
submit.addEventListener("click", function(){
    thank.style.display = "block"
    title.className += " new"
})

// cssText
gender.style.cssText += "width:200px; height:100px";
console.log(gender);

// className property
let title = document.getElementById("title")
console.log(title.className);
title.className += " new"
console.log(title);


// classList property
let subTitle = document.getElementById("subTitle")
subTitle.classList.add("newClass", "newClass2", "newClass3")
console.log(subTitle);
subTitle.classList.remove("list","newClass", "newClass1")
console.log(subTitle);
subTitle.classList.replace("newClass2", "newC")
console.log(subTitle);
console.log(subTitle.classList.contains("newC")); 
subTitle.classList.toggle("newC")
console.log(subTitle);
subTitle.classList.toggle("newList")
console.log(subTitle);

// what is Event
// An event is an action that occurs in the brower such as click, mouseover, load etc


// Event Bubbling & Event Capturing
// Event bubbling: Event starts at the most specific element ans flows towards least specific element.

// Event capturing: Event starts at the least specific element ans flows towards most specific element.

// Event handler: An event handler is a piece of code that will be execuuted whn the event occurs. Also known as event listener

// There are three ways to handle events in DOM
// 1. Event Handler in HTML Attributes

function displayMsg(){
    console.log("button clicked from funcion");
}

// .this keyword: it refers to the target elemnet 

// 2. adding the event handler name in javascript
let eventBtn = document.getElementById("btn")
// eventBtn.onclick = function(){
//     console.log("Event Button");
//     console.log(this.id);
// }
eventBtn.onclick = null

// 3.  addEevntListiner() & removeEventListener() 
// addEventListener() will register an event handler
// addEventListener(event, function)
eventBtn.addEventListener("click", function(){
    console.log("Event Button");
    console.log(this.id);
 })
 eventBtn.addEventListener("click", displayMsg)
// removeEventListener() will remove  an event handler
eventBtn.removeEventListener("click", displayMsg) 


