function rotate(e) {
  const name = "down";
  const doc = document.getElementsByClassName("menu-bar");
  const name2 = "active";
  a = e.children;
  b = e.parentNode;
  if (a[1].classList.contains(name)) {
    a[1].classList.remove(name);
    doc[0].style.height = "100vh";
    b.classList.remove(name2);
  } else {
    a[1].classList.add(name);
    doc[0].style.height = "95vh";
    b.classList.add(name2);
  }
}
