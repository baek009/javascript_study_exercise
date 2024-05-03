function getInfo() {
    const info = document.forms["form1"];
    let text = "";
    for (let i = 0; i<info.length; i++){
        text += info.elements[i].value + "<br>";
    }
    document.getElementById("show").innerHTML = text;
    
}