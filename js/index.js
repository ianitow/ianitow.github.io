function typeWriter(elementID, text) {
  let i = 0;
  function write() {
    var speed = 20;
    if (i < text.length) {
      const a = (document.getElementById(elementID).innerHTML +=
        text.charAt(i));
      i++;
      setTimeout(write, speed);
    }
  }
  write();
}

document.querySelectorAll("ul#menu-content li a").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("input[type=checkbox").checked = false;
  });
});
typeWriter("type-name", "DESENVOLVEDOR FULL-STACK");
