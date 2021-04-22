console.log("shish")

headtext = "HI, I AM KARTHIK"
bodytext = "shish is my new word to say in the public "
var textid = "head"
var bodyid = "heada"
for(i = 0; i < 11; i++){
    is = String(i)
    temp = textid + is;
    temp1 = bodyid + is;
    document.getElementById(temp).innerHTML = headtext;
    document.getElementById(temp1).innerHTML = bodytext;
}



shadow();
function shadow(wid = 1){

    

    // for(i = 0; i < 11; i++){
    //     temp = textid + i;
    //     document.getElementById(temp).style.left = (i * wid) + 'px';
    // }

}