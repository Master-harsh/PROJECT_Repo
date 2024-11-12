const Button = document.getElementById('buttn');
const DivContainer = document.getElementById('container');
let IsDirection = true;

Button.addEventListener("click", function() {
    if (IsDirection) {
    DivContainer.style.float = "right";
    DivContainer.style.marginRight = "10px";
    IsDirection = false;
    } else {
    DivContainer.style.float = "left";
    DivContainer.style.marginLeft = "10px";
    IsDirection = true;
    }
});

