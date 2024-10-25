let Buttons = document.querySelectorAll('.button');
let divBox = document.querySelector('.Container');

Buttons.forEach(function(){
    console.log(Buttons);

    document.addEventListener("click", function(e){
        // console.log(e);

        console.log(e.target);
        
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

        // USING SWITCH CASE

        switch (e.target.id) {
            case 'gray':
                divBox.style.backgroundColor = "gray";
                break;
            case 'white':
                divBox.style.backgroundColor = "white";
                break;

            case 'yellow':
                divBox.style.backgroundColor = "yellow";
                break;

            case 'blue':
                divBox.style.backgroundColor = "blue";
                break;

            case 'purple':
                divBox.style.backgroundColor = "purple";
                break;
        
            default:
                divBox.style.backgroundColor = "white";
                break;
        }
    });     
});

