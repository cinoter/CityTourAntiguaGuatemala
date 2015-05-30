/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 /* global retrun */
 //funcion que se llama cuando se seleciona un radio de tiempo
   
  //funcion que se llama cuando se seleciona un radio de tipo tour
  function tipo_tour(){
        document.getElementById("dtiempo").style.display = "block";
 
  }
  
  //funcion que se llama cuando se da clic al boton iniciar
  function ir_tour(tipo,tiempo){
     location.href = "city_tour.html?tour="+tipo+"&tiempo="+tiempo;
      
  }