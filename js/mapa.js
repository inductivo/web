// JavaScript Document


function mapa() 
{
    var latlng = new google.maps.LatLng(24.804639,-107.394655);
    var myOptions = {
      zoom: 16,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("mapa"), myOptions);
	
	var contentString = '<div id="letra">Blvd Francisco I. Madero 39pte' +  
	'<br>SALON 201 COL. CENTRO'
	+'<br>(667) 7-15-72-72</div>';
	

var infowindow = new google.maps.InfoWindow({
    content: contentString,
	maxHeight:300
});
	
	
  var myLatLng = new google.maps.LatLng(24.804639,-107.394655);
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
	  title:"Suma Ventas"
    
  });
	
	google.maps.event.addListener(marker, 'click', function() {
	infowindow.open(map,marker);
});
	
	
}