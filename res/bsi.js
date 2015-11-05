// Browser-side Includes



function NewXmlHttpRequest() { /* returns cross-browser XMLHttpRequest, or null if unable */
    try {
        return new XMLHttpRequest();
    } catch (e) { }
    try {
        return new ActiveXObject("Msxml3.XMLHTTP");
    } catch (e) { }
    try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0");
    } catch (e) { }
    try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0");
    } catch (e) { }
    try {
        return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) { }
    try {
        return new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) { }
    return null;
}

function LoadFragmentIntoElement(fragment_url, element_id) {
    var element = document.getElementById(element_id);
    if (element == null) return false;
    element.innerHTML = '<p>Loading ...</p>';

    var xmlhttp = NewXmlHttpRequest();
    if (xmlhttp == null) return false;
    xmlhttp.open("GET", fragment_url);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            element.innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.send(null);
    return true;
}

function LoadHeaderFooter()
{
    LoadFragmentIntoElement("/Header.htm", "header");
    LoadFragmentIntoElement("/Footer.htm", "footer");
}