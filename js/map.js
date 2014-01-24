// Mapa

function initialize() {
				var latlng = new google.maps.LatLng(24.819446274324246, -107.38740066239508);
				var settings = {
					zoom: 15,
					center: latlng,
					mapTypeControl: true,
					mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
					navigationControl: true,
					navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
					mapTypeId: google.maps.MapTypeId.ROADMAP};
				var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
				/*var contentString = '<div id="cajamapa">'+
					'<h1 id="firstHeading" class="firstHeading">Suma Ventas </h1>'+
					'<div id="bodyContent">'+
					'<p>Suma Ventas Consultores <br> Emigdio Flores No 770 Col. Chapultepec C.P. 80058 <br>					Teléfono: (667) 275 1459 <br>Contacto: Lic. Liliana Montoya <br>contacto@sumaventas.com.mx </p>'+
					'</div>'+
					'</div>';*/
				/*var infowindow = new google.maps.InfoWindow({
					content: contentString
				});*/
				
				var companyImage = new google.maps.MarkerImage('images/logo2.png',
					new google.maps.Size(160,100),
					new google.maps.Point(0,0),
					new google.maps.Point(50,50));

				/*var companyShadow = new google.maps.MarkerImage('images/logo_shadow.png',
					new google.maps.Size(130,50),
					new google.maps.Point(0,0),
					new google.maps.Point(65, 50));*/

				var companyPos = new google.maps.LatLng(24.819446274324246, -107.38740066239508);

				var companyMarker = new google.maps.Marker({
					position: companyPos,
					map: map,
					icon: companyImage,
					/*shadow: companyShadow,*/
					title:"Suma Ventas Consultores",
					zIndex: 3});
				
				/*var trainImage = new google.maps.MarkerImage('images/train.png',
					new google.maps.Size(50,50),
					new google.maps.Point(0,0),
					new google.maps.Point(50,50));

				var trainShadow = new google.maps.MarkerImage('images/train_shadow.png',
					new google.maps.Size(70,50),
					new google.maps.Point(0,0),
					new google.maps.Point(60, 50));

				var trainPos = new google.maps.LatLng(24.82103110217238, -107.38826701590689);

				var trainMarker = new google.maps.Marker({
					position: trainPos,
					map: map,
					icon: trainImage,
					shadow: trainShadow,
					title:"Train Station",
					zIndex: 2
				});*/

				/*var parkingImage = new google.maps.MarkerImage('images/parking.png',
					new google.maps.Size(50,50),
					new google.maps.Point(0,0),
					new google.maps.Point(50,50)
				);

				var parkingShadow = new google.maps.MarkerImage('images/parking_shadow.png',
					new google.maps.Size(70,50),
					new google.maps.Point(0,0),
					new google.maps.Point(60, 50)
				);

				var parkingPos = new google.maps.LatLng(24.8214084391499, -107.3881148005453);

				var parkingMarker = new google.maps.Marker({
					position: parkingPos,
					map: map,
					icon: parkingImage,
					shadow: parkingShadow,
					title:"Parking Lot",
					zIndex: 1
				});*/
				
				google.maps.event.addListener(companyMarker, 'click', function() {
					infowindow.open(map,companyMarker);
				});
			}
	