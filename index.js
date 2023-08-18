function success(pos) {
    var crd = pos.coords;
  
    console.log('Sua posição atual é:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('Mais ou menos ' + crd.accuracy + ' metros.');
  };

navigator.geolocation.getCurrentPosition(success);

