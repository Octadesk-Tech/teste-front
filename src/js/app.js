var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var image = document.getElementsByClassName("slideshow");
    if (n > image.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = image.length} ;
    for (i = 0; i < image.length; i++) {
        image[i].style.display = "none"; 
    }
    image[slideIndex-1].style.display = "block"; 

    var j;
    var y = document.getElementsByClassName("slideshow-content");
    if (n > y.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = y.length} ;
    for (j = 0; j < y.length; j++) {
        y[j].style.display = "none"; 
    }
    y[slideIndex-1].style.display = "block"; 

    var k;
    var z = document.getElementsByClassName("slideshow-button");
    if (n > y.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = z.length} ;
    for (k = 0; k < z.length; k++) {
        z[k].style.borderBottom = "none"; 
        z[k].style.color = "grey";
    }
    z[slideIndex-1].style.borderBottom = "medium solid rgb(127, 82, 161)";
    z[slideIndex-1].style.color = "rgb(127, 82, 161)";
}