var h1 = document.getElementById('element');

h1.addEventListener('mouseover', function() {
 h1.classList.add('hover');
});

h1.addEventListener('mouseout', function() {
 h1.classList.remove('hover');
});
javascript

javascript
function loadPage(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    return false;
}