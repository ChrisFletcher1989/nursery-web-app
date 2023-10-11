
const getwhen=document.getElementById('when')
const gettime=document.getElementById('time')
const getwhere=document.getElementById('where')
const getdetails=document.getElementById('details')
const getEventButton=document.getElementById('eventButton')
const getUl = document.getElementById("allevents")



function createEvent() {
    let password= prompt("Enter Password")
    if(password === "miki") {
    let newspace = document.createElement("li");
    newspace.appendChild(document.createTextNode(""));
    allevents.appendChild(newspace);
    let newspace2 = document.createElement("li");
    newspace2.appendChild(document.createTextNode(""));
    allevents.appendChild(newspace2);
        let newli = document.createElement("li");
        newli.appendChild(document.createTextNode('When: ' + when.value));
        allevents.appendChild(newli);
        let newtime = document.createElement("li");
        newtime.appendChild(document.createTextNode('Time: ' + time.value));
        allevents.appendChild(newtime);
        let newwhere = document.createElement("li");
        newwhere.appendChild(document.createTextNode('Where: ' + where.value));
        allevents.appendChild(newwhere);
        let newdetails = document.createElement("li");
        newdetails.appendChild(document.createTextNode('Details: ' + details.value));
        allevents.appendChild(newdetails);
        var button =document.createElement("button");
        // APPEND TEXT TO BUTTON
	button.appendChild(document.createTextNode("Delete!"));
// APPEND BUTTON TO LIST
	allevents.appendChild(button);
    button.onclick=removeParent;
}
    else alert("Password incorrect")
    }
    function removeParent(evt){
        evt.target.parentNode.remove();
    
}	

getEventButton.addEventListener("click", createEvent);



