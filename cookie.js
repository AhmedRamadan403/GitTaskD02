function getCookie(cookieName){
    var cookies = document.cookie.split(";");
    var cookie;
    for (let i = 0; i < cookies.length; i++) {
        if ((cookies[i].split("=")[0].trim()) == cookieName) {
            cookie =cookies[i];
        }
    }
    return cookie;
}

function  setCookie(cookieName,cookieValue,expiryDate){
    if (expiryDate === undefined) {
        document.cookie = cookieName + "=" + cookieValue ;
    }else{
        document.cookie = cookieName + "=" + cookieValue + ";expires="+ expiryDate.toUTCString();
    }
}
function  deleteCookie(cookieName){
    var exDate = new Date()
    exDate.setMonth(exDate.getMonth()-6);
    var cookie = getCookie(cookieName);
    document.cookie = cookie + ";expires="+exDate.toUTCString();   
}

function allCookieList(){
    return document.cookie;
}
function hasCookie(cookieName){
    var cookie = getCookie(cookieName);
    if (cookie === undefined ) {
        return false;
    }
      return true;
}