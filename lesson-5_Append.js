function searchTicket(e) {
    let div = document.createElement("div");
    div.className = "answer";
    div.innerHTML = "<b>answer</b>";
    div.innerHTML += "<br>2";

    let whereToAdd = document.getElementById("container");

    whereToAdd.append(div);
    
    return false;
}
