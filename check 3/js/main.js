function boldstyle(){
    var text = document.getElementById("area")
    text.style.fontWeight ="bold"
}

function italicstyle(){
    var text = document.getElementById("area")
    text.style.fontStyle ="italic"
}
function underlinestyle(){
    var text = document.getElementById("area")
    text.style.textDecoration ="underline"
}
function sizeestyle(){
    var text = document.getElementById("area")
    text.style.fontSize = document.getElementById('sizeselect').value
}
function fonttstyle(){
    var text = document.getElementById("area")
    text.style.fontFamily = document.getElementById('fontselect').value
}