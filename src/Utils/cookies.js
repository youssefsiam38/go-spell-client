function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    if (exdays !== 0)
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
    else
        d.setTime(0)
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookies() {
    let partsOfCookies = document.cookie.split('; ')

    let cookies = {}

    for (let i = 0; i < partsOfCookies.length; i++) {
        cookies[partsOfCookies[i].split('=')[0]] = partsOfCookies[i].split('=')[1]
    }
    return cookies
}

module.exports = {
    setCookie,
    getCookies
}