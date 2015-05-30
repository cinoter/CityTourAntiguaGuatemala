/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var map;
var markers = [];
var infowindow;
var sitio = "address";
var r_lugar=['IMerced','ISanJose','ISanFrancisco','IEscuelaCristo','ICalvario'];
var r_info=["<h4>Iglesia de la Merced</h4>","<h4>Catedran de San Jose</h4>","<h4>Templo de San Francisco</h4> Santuario del Santo Hermano Pedro","<h4>Templo de la Escuela de Cristo</h4>","<h4>Iglesia Ermita del Santo Calvario</h4>"];
var rutas;
var directionsDisplay = null;
var directionsService = null;
    

//==============================================================================
//======================= MAPA =================================================
//==============================================================================
function initialize() {
  var myLatlng = new google.maps.LatLng(14.5617991, -90.728000);
  var coordenadasArco = new google.maps.LatLng(14.559594, -90.734163);
  var coordenadasIglesiaMerced = new google.maps.LatLng(14.561210, -90.734190);
  var coordenadasIglesiaSanJose=new google.maps.LatLng(14.556714, -90.732711);
  var corrdenadasIglesiaSanFrancisco=new google.maps.LatLng(14.553993, -90.729441);
  var corrdenadasIglesiaEscuelaCristo=new google.maps.LatLng(14.551444, -90.729783);
  var corrdenadasIglesiaCalvario=new google.maps.LatLng(14.545278, -90.729785);
  var coordenadasSanPedroApostol=new google.maps.LatLng(14.555124, -90.732211);
  var coordenadasParroquiaAsuncion=new google.maps.LatLng(14.574711, -90.740990); 
  var coordenadasIglesiaSanFelipe=new google.maps.LatLng(14.573117, -90.734641);
  var coordenadasMercado=new google.maps.LatLng(14.557168, -90.739544);
  
 infowindow = new google.maps.InfoWindow();
 directionsDisplay = new google.maps.DirectionsRenderer();
 directionsService = new google.maps.DirectionsService();
 
  var mapOptions = {
    zoom: 14,
    center: myLatlng
  };

   map = new google.maps.Map(document.getElementById('map-container'), mapOptions);
     //arco de santa catalina

 /**********************************Parroquia Nuetra Señora de la Asuncion******************************/
  var marcadorParroquiaAsuncion = new google.maps.Marker({
      position: coordenadasParroquiaAsuncion,
      map: map,
      title: 'Parroquia de Nuestra Señora de la Asuncion'
  });
  marcadorParroquiaAsuncion.setIcon('img/iconos/cty1.png')

 /*********************iglesia san felipe***********************/
  var marcadorIglesiaSanFelipe = new google.maps.Marker({
      position: coordenadasIglesiaSanFelipe,
      map: map,
      title: 'Iglesia de San Felipe'
  });
 marcadorIglesiaSanFelipe.setIcon('img/iconos/cty1.png');
 
 
/*********************iglesia merced***********************/
  var marcadorIglesiaMerced = new google.maps.Marker({
      position: coordenadasIglesiaMerced,
      map: map,
      title: 'Iglesia de la Merced'
  });
 marcadorIglesiaMerced.setIcon('img/iconos/cty1.png');
 
  /*********************Arco santa catalina***********************/
  var marcadorArco = new google.maps.Marker({
      position: coordenadasArco,
      map: map,
      title: 'Arco de Santa Catalina'
  });
 marcadorArco.setIcon('img/iconos/cty1.png');
 
  /******************Mercado***********************/
  var marcadorMercado = new google.maps.Marker({
      position: coordenadasMercado,
      map: map,
      title: 'Mercado de Artesanías'
  });
 marcadorMercado.setIcon('img/iconos/cty1.png');
 
 
 /******************************Catedral de San Jose**********************/
  var marcadorIglesiaSanJose = new google.maps.Marker({
      position: coordenadasIglesiaSanJose,
      map: map,
      title: 'Catedral de San Jose'
  });
  marcadorIglesiaSanJose.setIcon('img/iconos/cty1.png');
  

  
   /*********************iglesia San Pedro Apostol***********************/
  var marcadorIglesiaSanPedroApostol = new google.maps.Marker({
      position: coordenadasSanPedroApostol,
      map: map,
      title: 'Iglesia de San Pedro Apóstol'
  });
 marcadorIglesiaSanPedroApostol.setIcon('img/iconos/cty1.png');
 
  /*****************Catedral de San Francisco**********************/

  var marcadorIglesiaSanFrancisco = new google.maps.Marker({
      position: corrdenadasIglesiaSanFrancisco,
      map: map,
      title: 'Iglesia San Francisco'
  });
  marcadorIglesiaSanFrancisco.setIcon('img/iconos/cty1.png');
  /**************************Templo de la Escuela de Cristo****************************/
  var marcadorIglesiaEscuelaCristo = new google.maps.Marker({
      position: corrdenadasIglesiaEscuelaCristo,
      map: map,
      title: 'Iglesia Escuela de Cristo'
  });
  marcadorIglesiaEscuelaCristo.setIcon('img/iconos/cty1.png');
  
  
   /**********************************Iglesia el Calvario******************************/
  var marcadorIglesiaCalvario = new google.maps.Marker({
      position: corrdenadasIglesiaCalvario,
      map: map,
      title: 'El Calvario'
  });
  marcadorIglesiaCalvario.setIcon('img/iconos/cty1.png');
}



//funcion para poner el titulo en la ventana emergente y en el marcador
function pone_info_emergent(marcador,frase){
     infowindow.close();
     infowindow.setContent(frase);
     infowindow.open(map,marcador);
     marcador.setIcon('img/iconos/cty2.png');
    
}

  function salir(){     
       location.href = "index.html?rr=8O";
  }
  
function Busqueda(){
              // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var inicio = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

  
		var fin = document.getElementById("fin").value+" ,Antigua Guatemala";
                var modo = document.getElementById("modo").value;
 
		if(!fin){
			alert("Lugar destino no ingresado");
			return;
		}
		var request = {
		        origin: inicio,
		        destination: fin,
		        travelMode: google.maps.DirectionsTravelMode[modo],
		        unitSystem: google.maps.DirectionsUnitSystem['METRIC'],
		        provideRouteAlternatives: true
	    };
		directionsService.route(request, function(response, status) {
	        if (status == google.maps.DirectionsStatus.OK) {
	            directionsDisplay.setMap(map);
	            directionsDisplay.setPanel($("#direcciones").get(0));
	            directionsDisplay.setDirections(response);
	        } else {
	            alert("La direccion ingresada no se a podido encontrar");
	        }
	    });

      
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
        }
        
 function pone_coordenadas(lugar){
    document.getElementById("fin").value= lugar;
     Busqueda(); 
}
google.maps.event.addDomListener(window, 'load', initialize);   
  



	
	