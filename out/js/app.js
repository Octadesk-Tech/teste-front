function plusDivs(e){showDivs(slideIndex+=e)}function showDivs(e){var l,s=document.getElementsByClassName("slideshow");for(e>s.length&&(slideIndex=1),e<1&&(slideIndex=s.length),l=0;l<s.length;l++)s[l].style.display="none";s[slideIndex-1].style.display="block";var n,d=document.getElementsByClassName("slideshow-content");for(e>d.length&&(slideIndex=1),e<1&&(slideIndex=d.length),n=0;n<d.length;n++)d[n].style.display="none";d[slideIndex-1].style.display="block";var t,o=document.getElementsByClassName("slideshow-button");for(e>d.length&&(slideIndex=1),e<1&&(slideIndex=o.length),t=0;t<o.length;t++)o[t].style.borderBottom="none",o[t].style.color="grey";o[slideIndex-1].style.borderBottom="medium solid rgb(127, 82, 161)",o[slideIndex-1].style.color="rgb(127, 82, 161)"}var slideIndex=1;showDivs(slideIndex);