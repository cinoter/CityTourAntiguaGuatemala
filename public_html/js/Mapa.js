/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ttour=obtenerGET(0);
var tiempo=obtenerGET(1);
var map;
var markers = [];
var infoWin=[];
var index =0;
 var cronometro;
var sitio = "address";
var r_lugar=['IAsuncion','ISanFelipe','IMerced','ISanJose','ISanPedro','ISanFrancisco','IEscuelaCristo','ICalvario'];
var r_info=["<h4>Parroquia de Nuestra Señora de la Asunción</h4>","<h4>Santuario del Apóstol San Felipe</h4>","<h4>Iglesia de la Merced</h4>","<h4>Catedran de San Jose</h4>","<h4>Iglesia San Pedro Apóstol</h4>",
    "<h4>Templo de San Francisco</h4> Santuario del Santo Hermano Pedro","<h4>Templo de la Escuela de Cristo</h4>",
    "<h4>Iglesia Ermita del Santo Calvario</h4>"];
var coordenadas=[];  
var rutas;
var poligono;
    

//==============================================================================
//======================= MAPA =================================================
//==============================================================================

function initialize() {
  var myLatlng = new google.maps.LatLng(14.5617991, -90.728000);
  var coordenadasArco = new google.maps.LatLng(14.559666, -90.734259);
  var coordenadasIglesiaMerced = new google.maps.LatLng(14.561210, -90.734190);
  var coordenadasIglesiaSanJose=new google.maps.LatLng(14.556714, -90.732711);
  var corrdenadasIglesiaSanFrancisco=new google.maps.LatLng(14.553993, -90.729441);
  var corrdenadasIglesiaEscuelaCristo=new google.maps.LatLng(14.551444, -90.729783);
  var corrdenadasIglesiaCalvario=new google.maps.LatLng(14.545278, -90.729785);
  var coordenadasSanPedroApostol=new google.maps.LatLng(14.555124, -90.732211);
  var coordenadasParroquiaAsuncion=new google.maps.LatLng(14.574711, -90.740990); 
  var coordenadasIglesiaSanFelipe=new google.maps.LatLng(14.573117, -90.734641);
  
  
  coordenadas.push(coordenadasParroquiaAsuncion);
  coordenadas.push(coordenadasIglesiaSanFelipe);
  coordenadas.push(coordenadasIglesiaMerced);
  coordenadas.push(coordenadasIglesiaSanJose);
  coordenadas.push(coordenadasSanPedroApostol);//cambie de orden para que el tour sea lo mas cercano
  coordenadas.push(corrdenadasIglesiaSanFrancisco);
  coordenadas.push(corrdenadasIglesiaEscuelaCristo);
  coordenadas.push(corrdenadasIglesiaCalvario);
 
  
  infowindow = new google.maps.InfoWindow();
  
  var mapOptions = {
    zoom: 14,
    center: myLatlng
  };

   map = new google.maps.Map(document.getElementById('map-container'), mapOptions);
     //arco de santa catalina


/*********************iglesia merced***********************/
  var marcadorIglesiaMerced = new google.maps.Marker({
      position: coordenadasIglesiaMerced,
      map: map,
      title: 'Iglesia de la Merced'
  });
  google.maps.event.addListener(marcadorIglesiaMerced, 'click', function() {
   if(ttour==0){
    pone_info_emergent(marcadorIglesiaMerced,r_info[2]);
    mostrarSitio('IMerced');
   }
  });
  markers.push(marcadorIglesiaMerced);
 marcadorIglesiaMerced.setIcon('img/iconos/cty1.png');
 
 /*********************iglesia san felipe***********************/
  var marcadorIglesiaSanFelipe = new google.maps.Marker({
      position: coordenadasIglesiaSanFelipe,
      map: map,
      title: 'Iglesia de San Felipe'
  });
  google.maps.event.addListener(marcadorIglesiaSanFelipe, 'click', function() {
   if(ttour==0){
    pone_info_emergent(marcadorIglesiaSanFelipe,r_info[1]);
    mostrarSitio('ISanFelipe');
   }
  });
  markers.push(marcadorIglesiaSanFelipe);
 marcadorIglesiaSanFelipe.setIcon('img/iconos/cty1.png');
 
 
 /******************************Catedral de San Jose**********************/
  var marcadorIglesiaSanJose = new google.maps.Marker({
      position: coordenadasIglesiaSanJose,
      map: map,
      title: 'Catedral de San Jose'
  });
  google.maps.event.addListener(marcadorIglesiaSanJose, 'click', function() {
       if(ttour==0){
   pone_info_emergent(marcadorIglesiaSanJose,r_info[3]);
    mostrarSitio('ISanJose');
       }
  });
  markers.push(marcadorIglesiaSanJose);
  marcadorIglesiaSanJose.setIcon('img/iconos/cty1.png');
  
   /*********************iglesia San Pedro Apostol***********************/
  var marcadorIglesiaSanPedroApostol = new google.maps.Marker({
      position: coordenadasSanPedroApostol,
      map: map,
      title: 'Iglesia de San Pedro Apóstol'
  });
  google.maps.event.addListener(marcadorIglesiaSanPedroApostol, 'click', function() {
   if(ttour==0){
    pone_info_emergent(marcadorIglesiaSanPedroApostol,r_info[4]);
    mostrarSitio('ISanPedro');
   }
  });
  markers.push(marcadorIglesiaSanPedroApostol);
 marcadorIglesiaSanPedroApostol.setIcon('img/iconos/cty1.png');
 
  /*****************Catedral de San Francisco**********************/

  var marcadorIglesiaSanFrancisco = new google.maps.Marker({
      position: corrdenadasIglesiaSanFrancisco,
      map: map,
      title: 'Iglesia San Francisco'
  });
  google.maps.event.addListener(marcadorIglesiaSanFrancisco, 'click', function() {
    if(ttour==0){
     pone_info_emergent(marcadorIglesiaSanFrancisco,r_info[5]);
    mostrarSitio('ISanFrancisco');
    }
  });
  markers.push(marcadorIglesiaSanFrancisco);
  marcadorIglesiaSanFrancisco.setIcon('img/iconos/cty1.png');
  
  
  
  /**************************Templo de la Escuela de Cristo****************************/
  var marcadorIglesiaEscuelaCristo = new google.maps.Marker({
      position: corrdenadasIglesiaEscuelaCristo,
      map: map,
      title: 'Iglesia Escuela de Cristo'
  });
  google.maps.event.addListener(marcadorIglesiaEscuelaCristo, 'click', function() {
      if(ttour==0){
     pone_info_emergent(marcadorIglesiaEscuelaCristo,r_info[6]);
     mostrarSitio('IEscuelaCristo');
      }
  });
  markers.push(marcadorIglesiaEscuelaCristo);
  marcadorIglesiaEscuelaCristo.setIcon('img/iconos/cty1.png');
  
  
   /**********************************Iglesia el Calvario******************************/
  var marcadorIglesiaCalvario = new google.maps.Marker({
      position: corrdenadasIglesiaCalvario,
      map: map,
      title: 'El Calvario'
  });
  google.maps.event.addListener(marcadorIglesiaCalvario, 'click', function() {
      if(ttour==0){
      pone_info_emergent(marcadorIglesiaCalvario,r_info[7]);
    mostrarSitio('ICalvario');
      }
  });
  markers.push(marcadorIglesiaCalvario);
  marcadorIglesiaCalvario.setIcon('img/iconos/cty1.png')
 
 
 /**********************************Parroquia Nuetra Señora de la Asuncion******************************/
  var marcadorParroquiaAsuncion = new google.maps.Marker({
      position: coordenadasParroquiaAsuncion,
      map: map,
      title: 'Parroquia de Nuestra Señora de la Asuncion'
  });
  google.maps.event.addListener(marcadorParroquiaAsuncion, 'click', function() {
      if(ttour==0){
      pone_info_emergent(marcadorParroquiaAsuncion,r_info[0]);
    mostrarSitio('IAsuncion');
      }
  });
  markers.push(marcadorIglesiaCalvario);
  marcadorParroquiaAsuncion.setIcon('img/iconos/cty1.png')
 

 
  
  crea_poligono();
}


//funcion para poner el titulo en la ventana emergente y en el marcador
function pone_info_emergent(marcador,frase){
     infowindow.close();
     infowindow.setContent(frase);
     infowindow.open(map,marcador);
     marcador.setIcon('img/iconos/cty2.png');
    
}

//funcion para mostrar el sitio
 function mostrarSitio(cual){
	document.getElementById(sitio).style.display = "none";
        document.getElementById(sitio+"2").style.display = "none";
	sitio = cual;
	document.getElementById(sitio).style.display = "block";
        document.getElementById(sitio+"2").style.display = "block";
    }

function crea_poligono(){
    
       rutas = coordenadas;
       poligono= new google.maps.Polyline({
        path: rutas
        , map: map
        , strokeColor: '#ff0000'
        , strokeWeight: 5
        , strokeOpacity: 0.4
        , clickable: false
    });
    
    
    
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
        var contador_s =0;
        var contador_m =0;
        s = document.getElementById("segundos");
        m = document.getElementById("minutos");
       
        cronometro = setInterval(
            function(){
                if(contador_s==60)
                {
                    contador_s=0;
                    contador_m++;
                    if(contador_m == tiempo){
                      index++;
                      if(index < r_lugar.length){
                             mostrarSitio(r_lugar[index]);
                              pone_info_emergent(markers[index],r_info[index]);
                         }
                      else{
                            detenerse();
                        }
                        
                       contador_m-=contador_m; 
                    }
                 
                     m.innerHTML = contador_m;
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

  function Buscar() {     
       location.href = "Busqueda_GPS.html?rr=8O";
  }
 function salir(){     
       location.href = "index.html?rr=8O";
  }


google.maps.event.addDomListener(window, 'load', initialize);