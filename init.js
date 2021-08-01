var composeMenu = `
<!doctype html>
<html>

<head>
</head>

<body>
    <h1 onclick="send()">Compose Mail Here</h1><br>
    <img id="exit" onclick="exitMenu()" src="https://img.icons8.com/ios/100/000000/long-arrow-left.png"/>
    <img id="send" onclick="send()" src="https://img.icons8.com/material-outlined/192/000000/filled-sent.png"/>
    <br><br>
    <input type="email" id="adressTo" placeholder="To" list="emails"><br>
    <datalist id="emails">
        <option value="SYN">SYN</option>
        <option value="Moplhooon@gmail.com">Yaver</option>
    </datalist>
    <input type="text" id="subject" placeholder="Subject">
    <textarea rows="100" cols="42" id="mailbody" placeholder="Compose Email"></textarea>
</body>
<style>
    * {
        background-color: white;
        margin: 0;
    }

    h1 {
        position: relative;
        left: 30%;
        width: 500px;
        font-size: 59px;
    }

    #adressTo,
    #subject {
        border: 1px solid black;
        width: 980px;
        height: 150px;
        font-size: 59px;
        background-color: white;
    }

    #exit {
        
        position: absolute;
        left: 50px;
        width:50px;
        top: 15px;
        transform: scale(1.5)
    }

    #send {
        position: absolute;
        font-size: 59px;
        top: -50px;
        transform : scale(0.5) rotate(45deg);
        left:800px;
    }

    #mailbody {
        border: 1px solid black;
        font-size:49.9px;
        font-family: sans-serif;
    }
</style>

</html>
`
var html, mail, adress, mailbox, mails, avatarCharacter;
var sent = 0;
var mode = null;
var emails = []
var FirstEmailSent = false
var d = new Date();
var idCount = 0;
var colours = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
/*
use ///
create x,9
create y,1
loopEnd 5,3
printnl x,"*",y,"=",
mul x,y
print x
add y,1
create x,9
printnl x
end program*/
