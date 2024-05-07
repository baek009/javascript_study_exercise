function showCoord(e){
    let text = "좌표: ("+ Event.clientX + "," "+ Event.clientY + ")";
    document.getElementById("show").innerHTML = text;
}
