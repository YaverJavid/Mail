//Making Compose Button Able To Move
window.onload = function() {
    var divcon = document.querySelector('#compose');
    width = divcon.offsetWidth / 2
    height = divcon.offsetHeight / 2


    divcon.addEventListener('touchmove', function(ev) {
        var touchLocation = ev.targetTouches[0];

        divcon.style.top = (touchLocation.pageY - height) + "px";
        divcon.style.left = (touchLocation.pageX - width) + "px";

    }, false);
}



function template(address, mailbody) {
    mailbox = `  <div class="mailBox">
           <div class="avatar" id="id${idCount}">
               <p id="avatarText">${avatarCharacter}</p>
           </div>
           <h1 id="from">You Sent To : ${address}</h1>
           <h1 id="mailPreview">${mailbody}</h1>
           <h1 id="timeStamp">Today at ${d.getHours()}:0${d.getMinutes()}</h1>
       </div>`
    return mailbox
}

function composeMail() {
    html = getInnerHTML("page")
    wLocation("#")
    mode = "compose"
    newInnerHtml("page", composeMenu)
    if(FirstEmailSent){
        innerHtml("emails",  `<option value="${emails[0]}">Unknown</option`)
        emails.pop()
    }
}

function send() {
    mail = getById("mailbody").value
    mail.length > 152 ? mail = mail.slice(0, 152) + "..." : true
    adress = getById("adressTo").value
    emails.push(adress)
    newInnerHtml("page", html)
    mails = getInnerHTML("mailcont")
    avatarCharacter = adress.slice(0, 1).toUpperCase() || "?"
    newInnerHtml("mailcont", `${template (adress,mail)} ${mails}`)
    sent += 1
    document.getElementsByClassName("avatar")[0].style.backgroundColor = colours[getRandInt(-1, colours.length - 1)]
    FirstEmailSent = true
    
}

function exitMenu() {
    newInnerHtml("page", html)
}
var clicked = false;

function openThreeBarMenu() {
    if (!clicked) {
        setStyle("threeBarMenu", "display", "initial");
        clicked = true;
    } else {
        setStyle("threeBarMenu", "display", "none");
        clicked = false;
    }
    newInnerHtml("sent", `Sent ${sent} / ${sent}`)
}


Events("opacityComposeButton", "change", () => {
    setStyle("compose", "opacity", getById("opacityComposeButton").value)

})

var avatar = document.getElementsByClassName("avatar")
for (var x = 0; x < avatar.length; x++) {
    avatar[x].style.backgroundColor = colours[getRandInt(0, colours.length)];
}

function restoreComposeButton(){
    setStyle("compose","top","1570px")
    setStyle("compose","left","500px")
}