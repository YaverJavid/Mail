var flib = {
    buttonAnim2Color: " ",
    buttonAnim2bColor: " "
}

function getById(Id) {
    return document.getElementById(Id);
}

function removeHTML(Id) {
    getById(Id).innerHTML = ""
}

function getStyle(Id) {
    return getById(Id).style
}

function setStyle(Id, Mode, Value) {
    return getStyle(Id)[Mode] = Value
}

function getInnerHTML(Id) {
    return getById(Id).innerHTML
}

function getOuterHTML(Id) {
    return getById(Id).outerHTML
}

function getInnerTxt(Id) {
    return getById(Id).innerText
}

function newInnerTxt(Id, Text) {
    return getById(Id).innerText = Text
}

function innerTxt(Id, Text) {
    return getById(Id).innerText += Text
}

function newInnerHtml(Id, HTML) {
    return getById(Id).innerHTML = HTML
}

function innerHtml(Id, HTML) {
    return getById(Id).innerHTML += HTML
}

function insertHtmlElement(Id, TagKey, Class, IdOfNewElem) {
    Class = Class || "defaultLibClass"
    IdOfNewElem = IdOfNewElem || "defaultLibId"
    return innerHtml(Id, `<${TagKey} id="${IdOfNewElem}" class="${Class}"></${TagKey}>`)
}

function newHtmlElement(Id, TagKey, Class = "", IdOfNewElem = "") {
    Class = Class || "defaultLibClass"
    IdOfNewElem = IdOfNewElem || "defaultLibId"
    return newInnerHtml(Id, `<${TagKey} id="${IdOfNewElem}" class="${Class}"></${TagKey}>`)
}

function vibrate(delayTime, vibrationPattern) {
    setTimeout(() => {
        return navigator.vibrate(vibrationPattern)
    }, delayTime)
}

function abtob(string, encode = true) {
    if (!encode) {
        return window.atob(string)
    } else {
        return window.btoa(string)
    }
}

function openCallMenu(phoneNumber) {
    return window.location.href = `tel://${phoneNumber}`
}

function openSmsMenu(phoneNumber, smsBody) {
    return window.location.href = `sms://${phoneNumber}?body=${smsBody.replace(" ",'%')}`
}

function viewSource(URL) {
    return window.location.href = `view-source:${URL}`
}

function wLocation(URL) {
    return window.location.href = URL
}

function getBrowserLan() {
    return window.navigator.language
}

function getBrowserLans() {
    return window.navigator.languages
}

function addClass(ID, Class) {
    Class = Class || "<def>"
    return getById(ID).classList.add(Class)
}

function removeClass(ID, Class) {
    try {
        return getById(ID).classList.remove(Class)
    }
    finally {
        return '{Class Not Found}'
    }
}

function removeAttrHtml(ID, Attr) {
    return getById(ID).removeAttribute(Attr)
}

function addAttrHtml(ID, Attr, Value) {
    return getById(ID).setAttribute(Attr, Value)
}

function get() {
    return console.log(self.eruda.Console)
}

function getGenration() {
    return self.navigator.connection.effectiveType
}

function isOnline(bool = true) {
    bool ? bool = self.navigator.onLine : self.navigator.onLine ? bool = "online" : bool = "offline"
    return bool
}

function getClassList(Id) {
    return getById(Id).classList
}

function getStyles(Id, Mode) {
    return self.getComputedStyle(getById(Id))[Mode]
}

function buttonAnim(ID, time = 250) {
    setStyle(ID, "border", "2px inset")
    setInterval(() => {
        setStyle(ID, "border", "0px solid black")
    }, time)
}

function buttonAnim2(Id, pressingEffect, Timeout) {
    flib.buttonAnim2Color = getStyles(Id, "color")
    flib.buttonAnim2bColor = getStyles(Id, "backgroundColor")
    Timeout = Timeout || 250
    if (pressingEffect) buttonAnim(Id, Timeout);
    setStyle(Id, "color", flib.buttonAnim2bColor)
    setStyle(Id, "backgroundColor", flib.buttonAnim2Color)
    setTimeout(() => {
        setStyle(Id, 'color', flib.buttonAnim2Color)
        setStyle(Id, "backgroundColor", flib.buttonAnim2bColor)
    }, Timeout)
}

function Events(Id, event, handler) {
    getById(Id).addEventListener(event, handler)
}

function error(message) {
    throw new Error(message)
}

function getRandInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandBool(Fixed = null) {
    Fixed = Math.random()
    Fixed < 0.5 ? Fixed = true : Fixed = false
    return Fixed
}

function canvas(canvasId, Mode, optValue) {
    return getById(canvasId)[Mode] = optValue
}

function wait(handler, Timeout) {
    return setTimeout(handler, Timeout * 1000)
}

function repeat(handler, Timeout) {
    return setInterval(handler, Timeout * 1000)
}

function addCssAnimation(ID, Class, remove = false) {
    addClass(ID, Class)
    return remove ? wait(() => { removeClass(ID, Class) }, parseInt(getStyles(ID, "animationDuration"))) : remove
}


function hexToRgba(hex, opacity = 1) {
    opacity > 1 || opacity < 0 ? error("hexToRgba : Opacity Should Be In Range 0-1") : opacity
    return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length / 3 + '})', 'g')).map(function(l) { return parseInt(hex.length % 2 ? l + l : l, 16) }).concat(isFinite(opacity) ? opacity : 1).join(',') + ')';
}

function rgbToHex(red, green, blue) {
    red > 255 || red < 0 || green > 255 || green < 0 || blue > 255 || blue < 0 ? error("rgbToHex : RGB Value Should Be In Range 0-255") : blue
    return '#' + (0x1000000 + (red << 16) | (green << 8) | (blue << 0)).toString(16).slice(1);
}

