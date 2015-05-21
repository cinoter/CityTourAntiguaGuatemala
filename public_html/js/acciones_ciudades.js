/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 /* global retrun */



var tour_automatico=0;  //1 es automatico  0 es manual
var tiempo=1; //tiempo para cada estacion del tour

var texto_principal = "La ciudad de Antigua, sede de la Capitanía General de Guatemala,"
           +"fue fundada a principios del siglo XVI. Edificada a 1.500 metros de altura en una zona de sacudidas sísmicas,"
            +"fue destruida en gran parte por un terremoto en 1773. Construida con arreglo a un trazado en damero inspirado"
            +"en los principios del Renacimiento italiano, Antigua llegó a poseer en menos de tres siglos un gran número de"
            +"monumentos soberbios.";
    
  function obtener_texto(){ 
      return texto_principal;
  }  
  
  //funcion que se llama cuando se seleciona un radio de tiempo
  function pone_tiempo(t){
      tiempo=t;
  }
  
  //funcion que se llama cuando se seleciona un radio de tipo tour
  function tipo_tour(tipo){
      if( tipo != 1)
          document.getElementById("dtiempo").style.display = "none";
      else
        document.getElementById("dtiempo").style.display = "block";
      tour_automatico=tipo;
      
  }
  
  //funcion que se llama cuando se da clic al boton iniciar
  function ir_tour(){
     location.href = "city_tour.html?tour="+tour_automatico+"&tiempo="+tiempo;
      
  }