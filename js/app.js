var mobileMenu = document.querySelector(".mobileMenu");
var mobileMenuOpened = document.querySelector (".mobileMenuOpened");

console.log(mobileMenuOpened);
mobileMenu.addEventListener("click", function() {
    if (!mobileMenuOpened.classList.contains("visible")) {
        mobileMenuOpened.classList.add("visible");
        document.body.classList.add("overflowHidden");
      } else {
        mobileMenuOpened.classList.remove("visible");
        document.body.classList.remove("overflowHidden");
      }
});

var color = prompt("Введите цвет (красный, желтый, зеленый):");
switch (color) {
    case "красный":
        alert("Стой!");
        break;
    case "желтый":
        alert("Жди!");
        break;
    case "зеленый":
        alert("Иди!");
        break;
    default:
        alert("Некорректный цвет!");
}