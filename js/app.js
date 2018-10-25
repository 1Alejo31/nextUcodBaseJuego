$(document).ready(function(){
//Iniciar juego


//Cambio de color indefinidamente
    setInterval(function(){
        $(".main-titulo").css("color", "#FFFFFF");
        
    }, 1000);   
    setInterval(function(){
        $(".main-titulo").css("color", "#EAED26");
        
    }, 1175);   

    //Imagenes aleatoreas y llenar el cuadro

    for(var c = 1; c <8; c++){
        for(var j = 1; j < 7; j++ ){
            if($(".col-"+j).children("img:nth-child("+j+")").html()==null);
            {
                imagen = Math.floor(Math.random()*4)+1;
                imagenes = "image/"+imagen+".png";
                $(".col-"+c).prepend("<img id='theImg' src="+imagenes+" width='99%'> ");
            }
        }
    }
    
    
});


}

    
