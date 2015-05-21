/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global  $_GET */

var ttour=obtenerGET(0);
var tiempo=obtenerGET(1);
var map;
var markers = [];
var infoWin=[];
var index =0;
 var cronometro;
var sitio = "address";
var r_lugar=['IMerced','ISanJose','ISanFrancisco','IEscuelaCristo','ICalvario'];
var r_info=["<h4>Iglesia de la Merced</h4>","<h4>Catedran de San Jose</h4>","<h4>Templo de San Francisco</h4> Santuario del Santo Hermano Pedro","<h4>Templo de la Escuela de Cristo</h4>","<h4>Iglesia Ermita del Santo Calvario</h4>"];
  
    

//==============================================================================
//======================= MAPA =================================================
//==============================================================================

function initialize() {
  var myLatlng = new google.maps.LatLng(14.5567871, -90.728000);
  var coordenadasArco = new google.maps.LatLng(14.559666, -90.734259);
  var coordenadasIglesiaMerced = new google.maps.LatLng(14.561210, -90.734190);
  var coordenadasIglesiaSanJose=new google.maps.LatLng(14.556714, -90.732711);
  var corrdenadasIglesiaSanFrancisco=new google.maps.LatLng(14.553993, -90.729441);
  var corrdenadasIglesiaEscuelaCristo=new google.maps.LatLng(14.551444, -90.729783);
  var corrdenadasIglesiaCalvario=new google.maps.LatLng(14.545278, -90.729785);

  infowindow = new google.maps.InfoWindow();
  
  var mapOptions = {
    zoom: 14,
    center: myLatlng
  };

   map = new google.maps.Map(document.getElementById('map-container'), mapOptions);
     //arco de santa catalina

  var marcadorIglesiaMerced = new google.maps.Marker({
      position: coordenadasIglesiaMerced,
      map: map,
      title: 'Iglesia de la Merced'
  });
  google.maps.event.addListener(marcadorIglesiaMerced, 'click', function() {
    pone_info_emergent(marcadorIglesiaMerced,r_info[0]);
    mostrarSitio('IMerced');
  });
  markers.push(marcadorIglesiaMerced);
  
   //Catedral de San Jose
  var marcadorIglesiaSanJose = new google.maps.Marker({
      position: coordenadasIglesiaSanJose,
      map: map,
      title: 'Catedral de San Jose'
  });
  google.maps.event.addListener(marcadorIglesiaSanJose, 'click', function() {
   pone_info_emergent(marcadorIglesiaSanJose,r_info[1]);
    mostrarSitio('ISanJose');
  });
  markers.push(marcadorIglesiaSanJose);
  
  
  //Catedral de San Francisco
  var infoWinSanFrancisco = new google.maps.InfoWindow({
      content: ""
  });
infoWin.push(infoWinSanFrancisco);
  var marcadorIglesiaSanFrancisco = new google.maps.Marker({
      position: corrdenadasIglesiaSanFrancisco,
      map: map,
      title: 'Iglesia San Francisco'
  });
  google.maps.event.addListener(marcadorIglesiaSanFrancisco, 'click', function() {
     pone_info_emergent(marcadorIglesiaSanFrancisco,r_info[2]);
    mostrarSitio('ISanFrancisco');
  });
  markers.push(marcadorIglesiaSanFrancisco);
  
  //Templo de la Escuela de Cristo
  var marcadorIglesiaEscuelaCristo = new google.maps.Marker({
      position: corrdenadasIglesiaEscuelaCristo,
      map: map,
      title: 'Iglesia Escuela de Cristo'
  });
  google.maps.event.addListener(marcadorIglesiaEscuelaCristo, 'click', function() {
pone_info_emergent(marcadorIglesiaEscuelaCristo,r_info[3]);
    mostrarSitio('IEscuelaCristo');
  });
  markers.push(marcadorIglesiaEscuelaCristo);
  
   //Iglesia el Calvario
  var marcadorIglesiaCalvario = new google.maps.Marker({
      position: corrdenadasIglesiaCalvario,
      map: map,
      title: 'El Calvario'
  });
  google.maps.event.addListener(marcadorIglesiaCalvario, 'click', function() {
      pone_info_emergent(marcadorIglesiaCalvario,r_info[4]);
    mostrarSitio('ICalvario');
  });
  markers.push(marcadorIglesiaCalvario);
}

function pone_info_emergent(marcador,frase){
     infowindow.close();
     infowindow.setContent(frase);
     infowindow.open(map,marcador);
    
}
//funcion para mostrar el sitio
 function mostrarSitio(cual){
	document.getElementById(sitio).style.display = "none";
        document.getElementById(sitio+"2").style.display = "none";
	sitio = cual;
	document.getElementById(sitio).style.display = "block";
        document.getElementById(sitio+"2").style.display = "block";
    }

// Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
      if(i!=omitir)
      {
          markers[i].setMap(map);
         
      }
      else
      {
          //simular el evento click
           google.maps.event.trigger(markers[i], 'click', {
           
            });
      }
      
    
  }
}

function cerrar_emergente(ventana) {
  for (var i = 0; i < infWin.length; i++) {
      try{
          if(ventana !== infoWin[i])
                        infoWin[i].close();
       }
       catch(Exceptioe){}
      }     
    
}


// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setAllMap(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setAllMap(map);
}

 //fucion para verificar si el tour es automatico o manual
function inicia_tour(){
    if(ttour !=1)
            detenerse();
    else{
        mostrarSitio(r_lugar[index]);
        pone_info_emergent(markers[index],r_info[index]);
        }
    }
    
    //fucion para detener el crometro
    function detenerse(){
        clearInterval(cronometro);
    }
    
    //funcion para crear el cronometro y cambiar automaticamente el sitio
    function carga(){
        contador_s =0;
        contador_m =0;
        s = document.getElementById("segundos");
        m = document.getElementById("minutos");
       
        cronometro = setInterval(
            function(){
                if(contador_s==60)
                {
                    contador_s=0;
                    contador_m++;
                    m.innerHTML = contador_m;
                    if(contador_m == tiempo)
                    {
                      index++;
                      if(index < r_lugar.length)
                             mostrarSitio(r_lugar[index]);
                      else{
                            detenerse();
                        }
                        contador_m=0;
                    }
                }
                s.innerHTML = contador_s;
                contador_s++;

            }
            ,1000);
       inicia_tour();
    }
 
///metodo para optener los parametros envados por get
  function obtenerGET(valor){
   var url = document.location.href;
   var parametros = url.split('?')[1];
   var  parametro = parametros.split('&'); 
   var tmp = parametro[valor].split('='); ;
   return unescape(decodeURI(tmp[1]));
}

 var lugares = ["Iglesia de la Merced", "Catedral de San Jose", "Templo de San Francisco", "Templo de la Escuela de Cristo","Iglesia Ermita del Santo Calvario","<h4>Templo de la Escuela de Cristo</h4>","<h4>Iglesia Ermita del Santo Calvario</h4>"];
  var omitir=-1;
  function Buscar()
  {       var l = document.getElementById("ibuscar").value;
       var coincidencias = "";
        if(l!="") {
             for(var i=0; i<lugares.length; i++) {
                 
            if(lugares[i].indexOf(l)!=-1) {
                omitir=i;
                clearMarkers();
            }
        }
       
        }
   
  }

google.maps.event.addDomListener(window, 'load', initialize);