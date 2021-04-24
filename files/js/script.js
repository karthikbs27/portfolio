console.log("shish")
scrheight = window.screen.height;
scrwidth = window.screen.width;
bodytext = "I am a front-end web designer and an asparent for learning back-end. I have great interest on web develpment, image processing and data science using machine learning ."

var kd = document.getElementById("main").style.zIndex
console.log(kd)

textinside = document.getElementById("textinside")
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

function work(){
    setTimeout(() =>{
        preload()
        type()
    }, 5000)
}

function preload(){
    var load = document.getElementById("loading")
    load.style.display = "none"
    var main = document.getElementById("main")
    main.style.display = "block"
    main.style.opacity = "1"
}

var i = 0 
function type() {
    if (i < bodytext.length) {
      document.getElementById("body").innerHTML += bodytext.charAt(i);
      i++;
      setTimeout(type, 30);
    }
}


function expand(x, y){
    console.log("expand fun")
    y.style.cursor = "none"
    cursor.style.opacity = "0"
    cursorback.style.transition = "0.3s"
    cursorback.style.transform = "scale(5)"
    cursorback.style.border = "1px solid #39e600"
    textinside.style.display = "block"
    textinside.innerHTML = x;
    cursorchild.style.opacity = "0"
}


function contract(){
    console.log("contract fun")
    cursor.style.opacity = "1"
    cursorback.style.transform = "scale(1)"
    cursorback.style.border = "3px solid black"
    setTimeout(()=>{
        cursorback.style.transition = "0s"
    }, 300)
    
    textinside.style.display = "none"
    cursorchild.style.opacity = "1"
}
