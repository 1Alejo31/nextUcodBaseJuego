$(document).ready(function(){
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

//Declaracion de variables
var bnewd=0;
var maximo=0;
var matriz=0;



function eliminarhorver()
{
  matriz=0;
  rbh=horizontal() 
  rbv=vertical()    

  for(var j=1;j<8;j++)
  {
      matriz=matriz+$(".col-"+j).children().length;
  }

  if(rbh==0 && rbv==0 && matriz!=49)  //Completar campos vacios
  {
      clearInterval(eliminar);
      bnewd=0;
      newdulces=setInterval(function()
      {
        CrearDulces()  //Funcion completar nuevos dulces
      },600)
  }
  /*
  if(rbh==1 || rbv==1)
  {
    $(".elemento").draggable({ disabled: true });
    $("div[class^='col']").css("justify-content","flex-end")
    $(".activo").hide("pulsate",1000,function(){
      var scoretmp=$(".activo").length;
      $(".activo").remove("img")
      score=score+scoretmp;
      $("#score-text").html(score)  //Aumentar puntuacion
    })
  }
*/
  if(rbh==0 && rbv==0 && matriz==49)
  {
    $(".elemento").draggable({
      disabled: false,
      containment: ".panel-tablero",
      revert: true,
      revertDuration: 0,
      snap: ".elemento",
      snapMode: "inner",
      snapTolerance: 40,
      start: function(event, ui){
        var mov=mov+1;
        $("#movimientos-text").html(mov)
      }
    });
  }

  $(".elemento").droppable({
    drop: function (event, ui) {
      var dropped = ui.draggable;
      var droppedOn = this;
      espera=0;
      do{
        espera=dropped.swap($(droppedOn));
      }while(espera==0)
      rbh=horizontal()  
      rbv=vertical()    
      if(rbh==0 && rbv==0)
      {
        dropped.swap($(droppedOn));
      }
      /*
      if(rbh==1 || rbv==1)
      {
        clearInterval(newdulces);
        clearInterval(eliminar);   //desactivar funcion desplazamiento()
        eliminar=setInterval(function(){eliminarhorver()},150)  //activar funcion eliminarhorver
      }
      */
    },
  });

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

//Crear Nuevos dulces
function CrearDulces()
{
  $(".elemento").draggable({ disabled: true });
  $("div[class^='col']").css("justify-content","flex-start")
  for(var j=1;j<8;j++)
  {
      lencol[j-1]=$(".col-"+j).children().length;
  }
  if(bnewd==0)
  {
    for(var j=0;j<7;j++)
    {
      lenres[j]=(7-lencol[j]);
    }
    maximo=Math.max.apply(null,lenres);
    contador=maximo;
  }
  if(maximo!=0)
  {
    if(bnewd==1)
    {
      for(var j=1;j<8;j++)
      {
        if(contador>(maximo-lenres[j-1]))
        {
          $(".col-"+j).children("img:nth-child("+(lenres[j-1])+")").remove("img")
        }
      }
    }
    if(bnewd==0)
    {
      bnewd=1;
      for(var k=1;k<8;k++)
      {
        for(var j=0;j<(lenres[k-1]-1);j++)
        {
            $(".col-"+k).prepend("<img src='' class='elemento' style='visibility:hidden'/>")
        }
      }
    }
    for(var j=1;j<8;j++)
    {
      if(contador>(maximo-lenres[j-1]))
      {
        numero=Math.floor(Math.random() * 4) + 1 ;
        imagen="image/"+numero+".png";
        $(".col-"+j).prepend("<img src="+imagen+" class='elemento'/>")
      }
    }
  }
  if(contador==1)
  {
      clearInterval(newdulces);
      eliminar=setInterval(function(){eliminarhorver()},150)
  }
  contador=contador-1;
}
    
