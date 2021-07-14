var url = window.location.pathname;
var urlfilename = url.substring(url.lastIndexOf("/") + 1);
var alist = document.document.getElementsByClassName("card card-body");

for (var i = 0; i < sideList.length; i++) {
  pageurl = lst[i].childNodes[1].href;
  if (pageurl === undefined) {
    continue;
  }
  pageurlFilename = pageurl.substring(pageurl.lastIndexOf("/") + 1);
  if (i === 5) {
    continue;
  } else {
    if (urlfilename === pageurlFilename) {
      alert(1);
    }
  }
}
