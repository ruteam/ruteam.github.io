let width = 1074;
let list = document.querySelector(".images");
let pictures = document.querySelectorAll(".li__gal");
let position = 0;
document.querySelector(".prev").onclick = function() {
    position += width;
    position = Math.min(position, 0)
    list.style.marginLeft = position + "px";
};
document.querySelector(".next").onclick = function() {
    position -= width;
    position = Math.max(position, -width * (pictures.length - 1));
    list.style.marginLeft = position + "px";
};