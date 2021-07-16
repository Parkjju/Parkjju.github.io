var url = window.location.pathname;
var urlfilename = url.substring(url.lastIndexOf("/") + 1);
var alist = document.getElementsByClassName("card card-body");

for (var i = 0; i < alist.length; i++) {
  if (alist[i].childNodes[1] === undefined) {
    continue;
  }
  pageurl = alist[i].childNodes[1].href;
  pageurlFilename = pageurl.substring(pageurl.lastIndexOf("/") + 1);
  if (i === 5) {
    continue;
  } else {
    if (urlfilename === pageurlFilename) {
      alist[i].parentNode.previousElementSibling.classList.add("active");
      alist[
        i
      ].parentNode.previousElementSibling.childNodes[1].childNodes[3].classList.add(
        "down"
      );
      alist[i].parentNode.previousElementSibling.childNodes[1].classList.add(
        "collapse"
      );

      alist[i].childNodes[1].classList.add("active");
    } else {
      alist[i].childNodes[1].classList.remove("active");
    }
  }
}
