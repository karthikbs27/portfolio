console.log("shish")
bodytext = "I am a front-end web designer and an asparent for learning back-end. I have great interest on web develpment, image processign and data science using machine learning ."

var i = 0 
type()
function type() {
    if (i < bodytext.length) {
      document.getElementById("body").innerHTML += bodytext.charAt(i);
      i++;
      setTimeout(type, 30);
    }
}

cursor = document.getElementById("cursor")
cursorback = document.getElementById("cursorback")
cursorchild = document.getElementById("cursorchild")
document.addEventListener('mousemove', e =>{
    cursor.style.top = e.pageY + "px"
    cursorback.style.top = e.pageY + "px"
    cursorchild.style.top = e.pageY + "px"
    cursor.style.left = e.pageX + "px"
    cursorback.style.left = e.pageX + "px"
    cursorchild.style.left = e.pageX + "px"
})

function preload(){
    document.getElementById("loading").style.opacity = "0"
    var main = document.getElementById("main")
    main.style.display = "block"
    main.style.opacity = "1"
  
}

