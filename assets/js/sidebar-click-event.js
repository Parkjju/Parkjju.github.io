function rotate(e) {
  const name = "down";
  a = e.children;
  if (a[1].classList.contains(name)) {
    a[1].classList.remove(name);
  } else {
    a[1].classList.add(name);
  }
}
