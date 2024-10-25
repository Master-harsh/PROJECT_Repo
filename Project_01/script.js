let buttons = document.getElementById('button');
let body = document.querySelector('body');

// console.log(buttons);
// console.log(body);

buttons.forEach(function () {
    console.log(buttons);

    document.buttons.addEventListener("click", function(e){
        console.log(e);

        console.log(e.target);
        
        switch (e.target.id) {
            case 'gray':
                body.style.backgroundColor = "gray";
                break;

                case 'white':
                body.style.backgroundColor = "white";
                break;

                case 'yellow':
                body.style.backgroundColor = "yellow";
                break;

                case 'blue':
                body.style.backgroundColor = "blue";
                break;
        
            default:
                body.style.backgroundColor = "white";
                break;
        }

        // USING IF/ELSE 

        // if(e.target.id == 'gray'){
        //     divBox.style.backgroundColor = "gray";
        //     divBox.style.color = "red";
        // } else if(e.target.id == 'white'){
        //     divBox.style.backgroundColor = "white";
        // } else if(e.target.id == 'yellow'){
        //     divBox.style.backgroundColor = "yellow";
        // } else if(e.target.id == 'blue'){
        //     divBox.style.backgroundColor = "blue";
        // } else if(e.target.id == 'purple'){
        //     divBox.style.backgroundColor = "purple";
        // } else{
        //     divBox.style.backgroundColor = "black";
        //     divBox.style.color = "white"
        // }

    });
});


