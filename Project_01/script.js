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
                body.style.backgroundColor = "gray";
                break;
        }
    });
});

// buttons.addEventListener("click", function(e){
//     console.log(e);

//     console.log(e.target);
    
//     switch (e.target.id) {
//         case 'gray':
//             body.style.backgroundColor = "gray";
//             break;

//             case 'white':
//             body.style.backgroundColor = "white";
//             break;

//             case 'yellow':
//             body.style.backgroundColor = "yellow";
//             break;

//             case 'blue':
//             body.style.backgroundColor = "blue";
//             break;
    
//         default:
//             body.style.backgroundColor = "gray";
//             break;
//     }
// });
