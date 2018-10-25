$(document).ready(function(){
//Cambio de color indefinidamente
    setInterval(function(){
        $(".main-titulo").css("color", "#FFFFFF");
        
    }, 1000);   
    setInterval(function(){
        $(".main-titulo").css("color", "#EAED26");
        
    }, 1175);   

    //Imagenes aleatoreas y llenar el cuadro

    imagenes_Guardadas=[];

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
function eliminarhorver()
{
  matriz=0;
  rbh=horizontal()  //funcion busqueda dulces horizontal
  rbv=vertical()    //funcion buscar dulces vertical

  for(var j=1;j<8;j++)
  {
      matriz=matriz+$(".col-"+j).children().length;
  }

  if(rbh==0 && rbv==0) 
  {
    alert("encontro dulces iguales");
  }

}



//busqueda horizontal

function horizontal(){
    var Bhorizontal=0;
        for(var j=1;j<8;j++)
        {
            for(var k=1;k<6;k++)
            {
            var res1=$(".col-"+k).children("img:nth-last-child("+j+")").attr("src")
            var res2=$(".col-"+(k+1)).children("img:nth-last-child("+j+")").attr("src")
            var res3=$(".col-"+(k+2)).children("img:nth-last-child("+j+")").attr("src")
            if((res1==res2) && (res2==res3) && (res1!=null) && (res2!=null) && (res3!=null))
            {
                $(".col-"+k).children("img:nth-last-child("+(j)+")").attr("class","elemento activo")
                $(".col-"+(k+1)).children("img:nth-last-child("+(j)+")").attr("class","elemento activo")
                $(".col-"+(k+2)).children("img:nth-last-child("+(j)+")").attr("class","elemento activo")
                Bhorizontal=1;
            }
            }
        }
        return Bhorizontal;
}

//Busqueda Bertical

function vertical(){
    var Bvertical=0;
    for(var l=1;l<6;l++)
    {
        for(var k=1;k<8;k++)
        {
        var res1=$(".col-"+k).children("img:nth-child("+l+")").attr("src")
        var res2=$(".col-"+k).children("img:nth-child("+(l+1)+")").attr("src")
        var res3=$(".col-"+k).children("img:nth-child("+(l+2)+")").attr("src")
        if((res1==res2) && (res2==res3) && (res1!=null) && (res2!=null) && (res3!=null))
        {
            $(".col-"+k).children("img:nth-child("+(l)+")").attr("class","elemento activo")
            $(".col-"+k).children("img:nth-child("+(l+1)+")").attr("class","elemento activo")
            $(".col-"+k).children("img:nth-child("+(l+2)+")").attr("class","elemento activo")
            Bvertical=1;
        }
        }
    }
    return Bvertical;
}

    
