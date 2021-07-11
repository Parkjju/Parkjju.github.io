function rotate(e) {
  const name = "down";
  const doc = document.getElementsByClassName("menu-bar");
  console.log(doc);
  a = e.children;
  if (a[1].classList.contains(name)) {
    a[1].classList.remove(name);
    doc[0].style.height = "100vh";
  } else {
    a[1].classList.add(name);
    doc[0].style.height = "95vh";
  }
}
