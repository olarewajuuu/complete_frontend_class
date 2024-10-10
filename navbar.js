let menuBar = document.getElementById('meun-bar')
let navLink = document.getElementById('Nav-Link')
let chat = document.getElementById('chat')


function showmenu(){
    menuBar.classList.toggle('fa-times')
    navLink.classList.toggle('active')
}


function showChat(){
    // chat.classList.toggle('active')
    chat.style.display='block'
}
function close(){
    chat.style.display='none'
}