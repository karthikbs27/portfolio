console.log("shish")
scrheight = screen.height;
scrwidth = screen.width;
if (scrwidth < 600) document.getElementsByTagName("text")[0].innerHTML = "Swipe up and down"
bodytext = "An enthusiast for learning web development, image processing and data science using machine learning."



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
    textinside.style.display = "none"
    cursorchild.style.opacity = "1"
}

pages = ["main","about"]
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
                if (present == 1) console.log("Already in last page")
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
            }, 800)
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


placesmall()
function placesmall(){
    temp = document.getElementsByTagName("template")[0]
    smallscreen = document.getElementById("smallscreen")
    smallscreen1 = document.getElementById("smallscreen1")
    for (l = 0; l < 300 ; l++ ){
        clone = temp.content.cloneNode(true)
        heightval = Math.floor(Math.random() * (scrheight + 1))
        widthval = Math.floor(Math.random() * (scrwidth + 1))
        clone.querySelectorAll(".small")[0].style.top =  heightval + "px"
        clone.querySelectorAll(".small")[0].style.left = widthval + "px"
        smallscreen.appendChild(clone)
    }
    for (l = 0; l < 300 ; l++ ){
        clone = temp.content.cloneNode(true)
        heightval = Math.floor(Math.random() * (scrheight + 1))
        widthval = Math.floor(Math.random() * (scrwidth + 1))
        clone.querySelectorAll(".small")[0].style.top =  heightval + "px"
        clone.querySelectorAll(".small")[0].style.left = widthval + "px"
        smallscreen1.appendChild(clone)
    }
}


placemed()
function placemed(){
    temp2 = document.getElementsByTagName("template")[1]
    medscreen1 = document.getElementById("medscreen")
    medscreen2 = document.getElementById("medscreen2")
    medscreen3 = document.getElementById("medscreen1")
    medscreen4 = document.getElementById("medscreen22")
    for (l = 0; l < 150 ; l++ ){
        clone1 = temp2.content.cloneNode(true)
        heightval = Math.floor(Math.random() * (scrheight + 1))
        widthval = Math.floor(Math.random() * (scrwidth + 1))
        clone1.querySelectorAll(".med")[0].style.top =  heightval + "px"
        clone1.querySelectorAll(".med")[0].style.left = widthval + "px"
        medscreen1.appendChild(clone1)
    }
    for (l = 0; l < 150 ; l++ ){
        clone1 = temp2.content.cloneNode(true)
        heightval = Math.floor(Math.random() * (scrheight + 1))
        widthval = Math.floor(Math.random() * (scrwidth + 1))
        clone1.querySelectorAll(".med")[0].style.top =  heightval + "px"
        clone1.querySelectorAll(".med")[0].style.left = widthval + "px"
        medscreen2.appendChild(clone1)
    }
    for (l = 0; l < 150 ; l++ ){
        clone1 = temp2.content.cloneNode(true)
        heightval = Math.floor(Math.random() * (scrheight + 1))
        widthval = Math.floor(Math.random() * (scrwidth + 1))
        clone1.querySelectorAll(".med")[0].style.top =  heightval + "px"
        clone1.querySelectorAll(".med")[0].style.left = widthval + "px"
        medscreen3.appendChild(clone1)
    }
    for (l = 0; l < 150 ; l++ ){
        clone1 = temp2.content.cloneNode(true)
        heightval = Math.floor(Math.random() * (scrheight + 1))
        widthval = Math.floor(Math.random() * (scrwidth + 1))
        clone1.querySelectorAll(".med")[0].style.top =  heightval + "px"
        clone1.querySelectorAll(".med")[0].style.left = widthval + "px"
        medscreen4.appendChild(clone1)
    }
}

placelarg()
function placelarg(){
    temp3 = document.getElementsByTagName("template")[2]
    largscreen1 = document.getElementById("largscreen")
    largscreen2 = document.getElementById("largscreen2")
    largscreen3 = document.getElementById("largscreen1")
    largscreen4 = document.getElementById("largscreen22")
    for (l = 0; l < 50 ; l++ ){
        clone1 = temp3.content.cloneNode(true)
        heightval = Math.floor(Math.random() * (scrheight + 1 ))
        widthval = Math.floor(Math.random() * (scrwidth + 1))
        clone1.querySelectorAll(".larg")[0].style.top =  heightval + "px"
        clone1.querySelectorAll(".larg")[0].style.left = widthval + "px"
        largscreen1.appendChild(clone1)
    }
    for (l = 0; l < 50 ; l++ ){
        clone1 = temp3.content.cloneNode(true)
        heightval = Math.floor(Math.random() * (scrheight + 1))
        widthval = Math.floor(Math.random() * (scrwidth + 1))
        clone1.querySelectorAll(".larg")[0].style.top =  heightval + "px"
        clone1.querySelectorAll(".larg")[0].style.left = widthval + "px"
        largscreen2.appendChild(clone1)
    }
    for (l = 0; l < 50 ; l++ ){
        clone1 = temp3.content.cloneNode(true)
        heightval = Math.floor(Math.random() * (scrheight + 1 ))
        widthval = Math.floor(Math.random() * (scrwidth + 1))
        clone1.querySelectorAll(".larg")[0].style.top =  heightval + "px"
        clone1.querySelectorAll(".larg")[0].style.left = widthval + "px"
        largscreen3.appendChild(clone1)
    }
    for (l = 0; l < 50 ; l++ ){
        clone1 = temp3.content.cloneNode(true)
        heightval = Math.floor(Math.random() * (scrheight + 1))
        widthval = Math.floor(Math.random() * (scrwidth + 1))
        clone1.querySelectorAll(".larg")[0].style.top =  heightval + "px"
        clone1.querySelectorAll(".larg")[0].style.left = widthval + "px"
        largscreen4.appendChild(clone1) 
    }
}

