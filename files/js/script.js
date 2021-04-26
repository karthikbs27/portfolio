console.log("shish")
scrheight = window.screen.height;
scrwidth = window.screen.width;
bodytext = "I am a front-end web designer and an asparent for learning back-end. I have great interest on web develpment, image processing and data science using machine learning ."



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
    load = document.getElementById("loading")
    main = document.getElementById("main")
    
    load.style.transform = "scale(2)"
    load.style.opacity = "0"
    main.style.opacity = "1"
    main.style.transform = "scale(1)"
    setTimeout(() =>{
        load.style.display = "none"
    }, 1000)

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

pages = ["main","about","work"]
var present = 0;
num = 0
ite = 0
var works = false; 
function scrolled(event, pag){

    if(works) {console.log("no multiple threads"); return}
    else if(!works){

        dir = event.deltaY
        num = num + dir

        if(num >= 200 || num <= -200){
            works = true
    
            ind = pages.indexOf(pag)
            console.log(present, dir, num)

            if (dir  > 0){ 
                if (present == 2) console.log("Already in last page")
                else {nextpage(pages[present], pages[present + 1], 1); present = present + 1}
            }
            else if( dir < 0){
                if(present == 0) console.log("Alredy in first page")
                else {nextpage(pages[present], pages[present - 1], -1); present = present - 1;}
            }

            num = 0
            ite = 0
            setTimeout(()=>{
                works = false;
            }, 1000)
        }   
    }
}

function nextpage(thispage, thatpage, zoom){
    tha = document.getElementById(thatpage)
    thi = document.getElementById(thispage)

    if(zoom == 1){
        tha.style.transform = "scale(1)"
        thi.style.transform = "scale(2)"
    }
    else if(zoom == -1){
        tha.style.transform = "scale(1)"
        thi.style.transform = "scale(0.5)"
    } 
    thi.style.opacity = "0"
    tha.style.opacity = "1"
    thi.style.pointerEvents = "none"
    tha.style.pointerEvents = "auto"
    
}
